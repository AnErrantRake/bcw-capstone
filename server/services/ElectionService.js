import mongoose from 'mongoose'

//TODO import ballot service
//TODO import maker service

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
  pin: { type: Number, required: true },
  timeoutEpoch: { type: Number, required: true },
  votes: [{ name: String, voteValues: Object }],
  //TODO add back ballot id required: true
  ballotID: { type: ObjectId, ref: 'Ballot', required: false },
  makerID: { type: ObjectId, ref: 'Maker', required: true }
})

_schema.pre('save', function (next) {
  let election = this;
  //@ts-ignore
  election.timeoutEpoch = Date.now() + (15 * 60 * 1000);
  next();
})

export default mongoose.model('Election', _schema)