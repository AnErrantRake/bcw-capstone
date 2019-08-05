//THIS FILE STAYS BASICALLY THE SAME
import mongoose from 'mongoose'

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', err => {
  console.error('[DB] Error:', err)
})

const connectionString = `mongodb+srv://${process.env.DB_USERNAME || 'student'}:${process.env.DB_PASSWORD || 'student'}@cluster0-4eckx.mongodb.net/bcw-capstone?retryWrites=true&w=majority`

export default class DbContext {
  static async connect() {
    try {
      let status = await mongoose.connect(connectionString)
      console.log("[DB] CONNECTED")
      return status
    } catch (e) {
      console.error(e)
    }
  }
}