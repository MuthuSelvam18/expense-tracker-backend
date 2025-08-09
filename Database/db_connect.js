const Configuration = require('../Configurations/config')
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        console.log("Configuration.DB_URL",Configuration.DB_URL)
      const conn = await mongoose.connect(Configuration.DB_URL);
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

module.exports=connectDB;