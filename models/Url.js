const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({                       //Creating the Mongoose Schema to determine how data is stored in MongoDb
  urlId: {
    type: String,
    required: true,
  },
  origUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model('Url', UrlSchema);           //Schema exported