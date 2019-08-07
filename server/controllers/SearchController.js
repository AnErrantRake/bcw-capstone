import express from 'express'
import _googlePlacesApi from '../services/apis/GooglePlacesService'
import _googleGeocodingApi from '../services/apis/GoogleGeocodingService'
import { Authorize } from '../middleware/authorize'

// given an address as string, returns 'lat,lon' of the address
async function googleGeoCode(address) {
  // parse address into payload
  let payload = {
    'address': address
  }

  // push out for geocoding
  let response = await _googleGeocodingApi.get('', { params: payload })
    .then(res => {
      // parse response for lat lon
      if (res.data.results.length > 0) {
        // use first result
        let resLocation = res.data.results[0].geometry.location;
        return `${resLocation.lat},${resLocation.lng}`;
      } else {
        throw new Error('Address invalid')
      }
    })
    .catch(error => { throw new Error(error) });
  return response;
}

export default class SearchController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('/google', this.getByLocationFromGoogle)
      .use(this.defaultRoute)
  }

  async getByLocationFromGoogle(req, res, next) {
    try {
      // determine location as coordinates
      let reqLocation = '';
      if (req.query.lat && req.query.lon) { // prefer coordinates
        reqLocation = `${req.query.lat},${req.query.lon}`;
      } else if (req.query.address) { // handle address
        reqLocation = await googleGeoCode(req.query.address);
      } else { // location is required
        return res.status(400).send('Location invalid');
      }

      // construct query parameters
      let query = {
        location: reqLocation,
        type: 'restaurant',
        rankby: 'distance'
      }
      // handle optional queries
      if (req.query.keyword) {
        query.keyword = req.query.keyword
      }

      // await response
      let results = await _googlePlacesApi.get('', {
        params: query
      });

      // return array of search results
      return res.send(results.data.results);
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

}
