const express = require('express');
const router = express.Router();
const Url = require('../models/Url');

//Deleting the Short URL
router.delete('/short', async (req, res) => {           //Using HTTP POST request to delete the data from database 
  const { _id } = req.body;                           //Extracting the data ID value from the HTTP request body
  try {
    let url = await Url.findOne({ _id });             //Checking if data ID exists in the database 
    if (url) {
      url.deleteOne();                                //If so, it'll be deleted
    } else return res.status(404).sendFile('404.html', { root: './views' });  //If the URL doesn't exist the 404 page will be returned
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
});


module.exports = router;
