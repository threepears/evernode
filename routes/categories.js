"use strict";

const express = require('express');
const router = express.Router();

const Category = require('../models/categories');
const Note = require('../models/note');

const ctrl = require('../controllers/categories');

//Passes ID as parameter and continues to next middleware
router.param('id', (req, res, next, id) => {
  Category
    .findById(id, (err, category) => {
      if (err) throw err;

      req.category = category;

      Note.find({category: id}, (err, notes) => {
        if (err) throw err;

        req.category.notes = notes;
        next();
      });
    });
});

router
	.get('/categories', ctrl.index)
	.post('/categories', ctrl.create)
	.get('/categories/new', ctrl.new)
  .get('/categories/:id', ctrl.show);
/*router.put('/notes/:id', note.update);
router.get('/notes/:id/edit', note.edit);
router.delete('/notes/:id', note.destroy);*/

module.exports = router;
