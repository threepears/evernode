"use strict";

const express = require('express');
const router = express.Router();

const Note = require('../models/note');
const ctrlNote = require('../controllers/note');

//Passes ID as parameter and continues to next middleware
router.param('id', (req, res, next, id) => {
	Note
    .findById(id)
    .populate('category')
    .exec((err, note) => {
		  if (err) throw err;

		  req.note = note;
		  next();
	  });
});

router.get('/notes', ctrlNote.index);
router.post('/notes', ctrlNote.create);
router.get('/notes/new', ctrlNote.newNote);
router.get('/notes/:id', ctrlNote.show);
router.put('/notes/:id', ctrlNote.update);
router.get('/notes/:id/edit', ctrlNote.edit);
router.delete('/notes/:id', ctrlNote.destroy);

module.exports = router;
