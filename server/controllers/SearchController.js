import express from 'express'
import _googlePlacesApi from '../services/apis/GooglePlacesService'
import { Authorize } from '../middleware/authorize'

export default class SearchController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('/google', this.getByLocationFromGoogle)
      .use(this.defaultRoute)
  }

  async getByLocationFromGoogle(req, res, next) {
    try {
      // params come in as queries
      let query = {
        location: `${req.query.lat},${req.query.lon}`,
        radius: req.query.radius,
        type: 'restaurant'
      }
      // handle optional queries
      if (req.query.keyword) {
        query.keyword = req.query.keyword
      }

      let results = await _googlePlacesApi.get('', {
        params: query
      });

      res.send(results.data.results);
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

}