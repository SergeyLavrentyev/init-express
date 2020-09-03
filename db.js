const mongoose = require('mongoose')
const config = require('./config')

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (err) {
    console.log(err);
    // eslint-disable-next-line no-process-exit
    process.exit(1)
  }
}

module.exports = connectDB