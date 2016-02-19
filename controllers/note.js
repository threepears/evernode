"use strict";

const Note = require('../models/note');
const Category = require('../models/categories');

module.exports = {
	edit (req, res) {
		Category.find({}, (err, categories) => {
			if (err) throw err;

			res.render('new-note', {
				note: req.note,
				categories: categories
			});
		});
		// If not using router.param function (as commented out in the routes folder version of node.js), you would write the following instead:
		/*Note.findById(req.params.id, (err, note) => {
			if (err) throw err;

			res.render('new-note', {note: note});
		});*/
	},

	update (req, res) {
		req.note.update(req.body, (err) => {
			if (err) throw err;

			res.redirect(`/notes/${req.note._id}`);
		// Old way of writing it
		/* Note.findByIdAndUpdate(req.params.id, req.body, (err, note) => {
				if (err) throw err;

				res.redirect(`/notes/${note._id}`);
			}); */
		});
	},

	index (req, res) {
		Note.find({}, (err, notes) => {
			if (err) throw err;

			res.render('notes-index', {notes: notes});
		});
	},

	newNote (req, res) {
		Category.find({}, (err, categories) => {
			if (err) throw err;

			res.render('new-note', {
				categories: categories
			});
		});
	},

	create (req, res) {
		Note.create(req.body, (err, note) => {
			if (err) throw err;

			res.redirect(`/notes/${note._id}`);
		});
	},

	show (req, res) {
		console.log(req.note);
		res.render('show-note', {note: req.note});
		// Old way of writing it
		/*Note.findById(req.params.id, (err, note) => {
			if (err) throw err;

			res.render('show-note', {note: note});
		});*/
	},

	destroy (req, res) {
		req.note.remove((err) => {
			if (err) throw err;

			res.redirect('/notes');
		});
		// Old way of writing it
		/*Note.findByIdAndRemove(req.params.id, (err) => {
			if (err) throw err;

			res.redirect('/notes');
		});*/
	}
};
