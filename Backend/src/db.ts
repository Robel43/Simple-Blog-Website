import mongoose from 'mongoose'

const DB_URL = process.env.MONGO_URI || process.env.LOCAL_CONNECTION

mongoose.connect(DB_URL)

mongoose.Promise = global.Promise

const dbCon = mongoose.connection;
dbCon.on('error', console.error.bind(console, 'connection to db error:'));
dbCon.once('open', () => {
  console.log(`Connected to the database instance on ${DB_URL}`)
});


export default {
  Connection: dbCon
}

