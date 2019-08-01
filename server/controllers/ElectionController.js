import _electionService from '../services/ElectionService.js'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'

//TODO sockets import

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
            let data = await _electionService.findOne({ pin: req.params.pin })
            return res.send(data)
        } catch (error) {
            { next(error) }
        }
    }
    async addVote(req, res, next) {
        try {
            let data = await _electionService.findOne({ pin: req.params.pin })
            //@ts-ignore
            if (Date.now() < data.timeoutEpoch) {
                //@ts-ignore
                data.votes.push(req.body)
                data.save()
            }
            return res.send(data)
        } catch (error) {
            { next(error) }
        }
    }
    async getAll(req, res, next) {
        try {
            let data = await _electionService.find({ makerID: req.session.uid })
            return res.send(data)
        } catch (error) {
            { next(error) }
        }
    }
    async getById(req, res, next) {
        try {
            let data = await _electionService.findOne({ _id: req.params.id, makerID: req.session.uid }).populate("ballotID")
            return res.send(data)
        } catch (error) {
            { next(error) }
        }
    }
    async createElection(req, res, next) {
        try {
            let electionInput = req.body
            electionInput.makerID = req.session.uid
            electionInput.pin = Math.floor(Math.random() * 10000)
            let data = await _electionService.create(electionInput)
            //TODO socket addition and pin numbers
            return res.status(201).send(data)
        } catch (error) {
            { next(error) }
        }
    }
    async deleteElection(req, res, next) {
        try {
            let data = await _electionService.findOneAndRemove({ _id: req.params.id, makerID: req.session.uid })
            // TODO add sockets 
            return res.send("Election deleted!")
        } catch (error) {
            { next(error) }
        }
    }
    async updateElection(req, res, next) {
        try {
            let data = await _electionService.findOneAndUpdate({ _id: req.params.id }, req.body)
            return res.send(data)
        } catch (error) {
            { next(error) }
        }
    }
}