"use strict";

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

const Note = mongoose.model('Notes', mongoose.Schema({
	title: String,
	text: String
}));

// All middleware comes before routes
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
	extended: false
}));

app.get('/', (req, res) => {
	res.send('Server Running');
});

app.get('/notes/new', (req, res) => {
	res.render('new-note');
});

app.get('/notes/:id', (req, res) => {
	Note.findById(req.params.id, (err, note) => {
		if (err) throw err;

		res.render('show-note', {note: note});
	});
});

app.post('/notes', (req, res) => {
	Note.create(req.body, (err, note) => {
		if (err) throw err;

		res.redirect(`/notes/${note._id}`);
	});
});

mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
	if (err) throw err;

	app.listen(PORT, () => {
  	console.log(`Evernode server running on port ${PORT}`);
  });
});
