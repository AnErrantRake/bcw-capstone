import express from 'express'
import _googlePlacesApi from '../services/apis/GooglePlacesService'
import _yelpApi from '../services/apis/YelpService'
import _zomatoApi from '../services/apis/ZomatoService'
import { Authorize } from '../middleware/authorize'

//PUBLIC
export default class SearchController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('/google', this.getByLocationFromGoogle)
      .get('/yelp', this.getByLocationFromYelp)
      .get('/zomato', this.getByLocationFromZomato)
      .use(this.defaultRoute)
  }

  async getByLocationFromGoogle(req, res, next) {
    try {
      // params come in as queries
      let results = await _googlePlacesApi.get('');
      res.send(results.data);
    } catch (error) {
      next(error)
    }
  }

  async getByLocationFromYelp(req, res, next) {
    try {
      // params come in as queries
      let results = await _yelpApi.get('');
      res.send(results.data);
    } catch (error) {
      next(error)
    }
  }

  async getByLocationFromZomato(req, res, next) {
    try {
      // params come in as queries
      let results = await _zomatoApi.get('');
      res.send(results.data);
    } catch (error) {
      next(error)
    }
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

}


