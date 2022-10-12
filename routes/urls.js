const express = require('express');
const router = express.Router();
const shortid = require('shortid');
const Url = require('../models/Url');
require('dotenv').config({ path: '../config/.env' });

// Short URL Generator
router.post('/short', async (req, res) => {                   //Using HTTP post request to generate and post the details to the database
  const { origUrl } = req.body;                               //Extracting the original URL value from the HTTP request body
  const base = process.env.BASE;                              //Importing the base URL from process.env

  const urlId = shortid.generate();                           //Generating and storing a Short ID

  try {
    let url = await Url.findOne({ origUrl });                 //Checking if the original URL already exist in the database
    if (url) {
      res.json(url);                                          //If found, the data we'll be returned in json format
    } else {
      const shortUrl = `${base}/${urlId}`;                    //Otherwise a short URL will be created combining the base URL and the Short ID

      url = new Url({                                         //Using the Mongoose model to pass in the fields to the model constructor
        origUrl,
        shortUrl,
        urlId,
        date: new Date(),
      });

      await url.save();                                       //Saving to the DB

      res.json(url);                                          //Returning the response in json format
    }
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  } 
  
});

module.exports = router;