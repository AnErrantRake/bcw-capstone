import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
  pin: { type: Number, required: true },
  timeoutEpoch: { type: Number, required: true },
  votes: [{ name: String, voteValues: Object }],
  ballotID: { type: ObjectId, ref: 'Ballot', required: true },
  makerID: { type: ObjectId, ref: 'Maker', required: true }
})

export default mongoose.model('Election', _schema)