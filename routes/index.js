'use strict';

const express = require('express');
const router = express.Router();

const note = require('./note');
const categories = require('./categories');

router.use(note);
router.use(categories);

module.exports = router;
