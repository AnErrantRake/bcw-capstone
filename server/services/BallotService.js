import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
  name: { type: String, required: true },
  noms: [{ type: String, required: true }],
  makerID: { type: ObjectId, ref: 'Maker', required: true }
}, { timestamps: true })

export default mongoose.model('Ballot', _schema)
