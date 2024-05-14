const express = require('express');
const { MovieIndex, MovieCreate, MovieUpdate, MovieDelete, MovieDetail } = require('../controllers/movies.controller');

const router = express.Router();

// R - for reading  
router.get('/',MovieIndex);
// R - for reading single data
router.get('/:id',MovieDetail)
// C - for createig movies
router.post('/',MovieCreate);
// U - for updating movies
router.put('/:id',MovieUpdate);
// D - for deleting movies
router.delete('/:id',MovieDelete);

module.exports = router;