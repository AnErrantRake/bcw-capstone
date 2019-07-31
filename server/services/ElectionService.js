import mongoose from 'mongoose'

//TODO import ballot service
//TODO import maker service

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
    pin: { type: Number, required: true },
    timeoutEpoch: { type: Number, required: true },
    votes: [{ name: String, voteValues: Object }],
    ballotId: { type: ObjectId, ref: 'Ballot', required: true },
    makerId: { type: ObjectId, ref: 'Maker', required: true }



})

export default mongoose.model('Election', _schema)