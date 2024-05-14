const express = require('express');
const { MovieIndex, MovieCreate, MovieUpdate, MovieDelete } = require('../controllers/movies.controller');

const router = express.Router();

// R - for reading  
router.get('/',MovieIndex);
// C - for createig movies
router.post('/',MovieCreate);
// U - for updating movies
router.post('/:id',MovieUpdate);
// D - for deleting movies
router.post('/:id',MovieDelete);

module.exports = router;