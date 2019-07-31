import express from 'express';
import _ballotService from '../services/BallotService';
import { Authorize } from '../middleware/authorize'

export default class BallotController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('/:id', this.getByID)
      .get('', this.getBallots)
      .post('', this.createBallot)
      .delete('/:id', this.deleteBallot)
      .use(this.defaultRoute);
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async getByID(req, res, next) {
    try {
      let ballot = await _ballotService.findOne({ _id: req.params.id, makerID: req.session.uid });
      return res.send(ballot);
    } catch (error) {
      next(error);
    }
  }

  async getBallots(req, res, next) {
    try {
      let ballots = await _ballotService.find({ makerID: req.session.uid });
      return res.send(ballots);
    } catch (error) {
      next(error);
    }
  }

  async createBallot(req, res, next) {
    try {
      req.body.makerID = req.session.uid;
      let newBallot = await _ballotService.create(req.body);
      return res.status(201).send(newBallot);
    } catch (error) {
      next(error);
    }
  }

  async deleteBallot(req, res, next) {
    try {
      await _ballotService.findOneAndRemove({ _id: req.params.id, makerID: req.session.uid });
      return res.send("Successfully deleted");
    } catch (error) {
      next(error);
    }
  }


}