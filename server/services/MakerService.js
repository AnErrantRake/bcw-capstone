import mongoose from "mongoose"
import bcrypt from 'bcryptjs'
let Schema = mongoose.Schema

//bcrypt uses hashing and salt to obfiscate your password 
const SALT = 10


let _schema = new Schema({
  //every email must be unique on the database
  username: { type: String, required: true, unique: true },
  hash: { type: String, required: true }
}, { timestamps: true })

//schema.methods are used to add a method to a Model instance
_schema.methods.validatePassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.hash, function (err, isMatch) {
      if (err || !isMatch) {
        return reject(err)
      }
      return resolve(isMatch)
    })
  })
}

//statics are used to create Model methods
_schema.statics.generateHash = function (password) {
  return bcrypt.hashSync(password, SALT)
}

export default mongoose.model('Maker', _schema)



