const express = require('express');
const router = express.Router();
const Url = require('../models/Url');

//Redirecting to the original URL
router.get('/:urlId', async (req, res) => {                                         //HTTP GET request to get the URL ID
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });                     //Checking if the URL ID actually exists
    if (url) {
      url.clicks++;                                                                 //If so, we add 1 to the clicks counter and save it
      url.save();
      return res.redirect(url.origUrl);                                             //Redirecting to the original URL stored in DB
    } else return res.status(404).sendFile('404.html', { root: './views' });        //If the short URL doesn't exist the 404 page will be returned
  } catch (err) {
    console.log(err);
    return res.status(404).sendFile('404.html', { root: './views' });
  }
});

module.exports = router;