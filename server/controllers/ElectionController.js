import _electionService from '../services/ElectionService.js'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'
import socket from '../socket/index'


export default class ElectionController {
    constructor() {
        this.router = express.Router()
            .get('/vote/:pin', this.getByPin)
            .put('/vote/:pin', this.addVote)
            .use(Authorize.authenticated)
            .get('', this.getAll)
            .get('/:id', this.getById)
            .post('', this.createElection)
            .delete('/:id', this.deleteElection)
            .put('/:id', this.updateElection)
            .use(this.defaultRoute)
    }



    defaultRoute(req, res, next) {
        next({ status: 404, message: 'No Election Found' })
    }
    async getByPin(req, res, next) {
        try {
            let data = await _electionService.findOne({ pin: req.params.pin }).populate("ballotID")
            if (!data) {
                return res.status(404).send(data);
            }
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async addVote(req, res, next) {
        try {
            let data = await _electionService.findOne({ pin: req.params.pin })
            if (!data) {
                return res.status(404).send(data);
            }
            // @ts-ignore
            data.votes.push(req.body)
            data.save()

            socket.notifyAddVote(data)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async getAll(req, res, next) {
        try {
            let data = await _electionService.find({ makerID: req.session.uid })
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async getById(req, res, next) {
        try {
            let data = await _electionService.findOne({ _id: req.params.id, makerID: req.session.uid }).populate("ballotID")
            if (!data) {
                return res.status(404).send(data);
            }
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async createElection(req, res, next) {
        try {
            // add author and pin
            let electionInput = req.body
            electionInput.makerID = req.session.uid
            electionInput.pin = Math.floor(Math.random() * 10000)

            let data = await _electionService.create(electionInput)
            return res.status(201).send(data)
        } catch (error) {
            next(error)
        }
    }
    async deleteElection(req, res, next) {
        try {
            await _electionService.findOneAndRemove({ _id: req.params.id, makerID: req.session.uid })
            return res.send("Election deleted!")
        } catch (error) {
            next(error)
        }
    }
    async updateElection(req, res, next) {
        try {
            let data = await _electionService.findOneAndUpdate({ _id: req.params.id }, req.body)
            socket.notifyAddVote(data)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
}