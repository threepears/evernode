const express = require('express');
const router = express.Router();

const note = require('../controllers/note');

router.get('/notes', note.index);
router.get('/notes/new', note.newNote);
router.get('/notes/:id', note.show);
router.post('/notes', note.create);
router.delete('/notes/:id', note.destroy);

module.exports = router;
