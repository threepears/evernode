"use strict";

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');

const logger = require('./lib/logger');
const note = require('./routes/');

const app = express();
const PORT = process.env.PORT || 3000;

// All middleware comes before routes
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));

app.use(logger);

app.get('/', (req, res) => {
	res.send('Server Running');
});

app.use(note);

mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
	if (err) throw err;

	app.listen(PORT, () => {
  	console.log(`Evernode server running on port ${PORT}`);
  });
});
