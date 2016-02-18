const express = require('express');
const router = express.Router();

const note = require('../controllers/note');

router.get('/notes', note.index);
router.post('/notes', note.create);
router.get('/notes/new', note.newNote);
router.get('/notes/:id', note.show);
router.put('/notes/:id', note.update);
router.get('/notes/:id/edit', note.edit);
router.delete('/notes/:id', note.destroy);

module.exports = router;
