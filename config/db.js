const mongoose = require('mongoose');
/* The path object key is passed inside the dotenv config because 
the .env file is not located in the root directory. 
We are passing the location of the .env file through this. */
require('dotenv').config({ path: './config/.env' });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {     //wait for Mongoose to connect
      useNewUrlParser: true,                            //If the connection encounters any issue with the new string parser, it can fall back to the old one
      useUnifiedTopology: true,                         //Enable MongoDB driver's new connection management
    });
    console.log('Database Connected');
  } catch (err) {                                       //If any error occurs it will be logged and the process closed
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;