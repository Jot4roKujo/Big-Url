//Importing necessary packages
const express = require('express');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config({ path: './config/.env' }); //this package loads the environment variables from '.env' to process.env

connectDB();

// Body Parser to extract the entire body portion of a request and expose it on req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setting access to /views folder
app.use(express.static(__dirname + '/views'));

//Importing routes
app.use('/', require('./routes/index'));
app.use('/api', require('./routes/urls'));
app.use('/del', require('./routes/del'));

//Rendering 'index.html' when a GET request is received
app.get('/', (req, res) => {
    res.render('index');
});

// Server Setup
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});