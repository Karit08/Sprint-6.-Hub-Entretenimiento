const express = require('express');
const router = express.Router();

const { getMovies, getSeries } = require('../controllers/MoviesSeriesController'); 

router.get('/movies', getMovies)
router.get('/series', getSeries)

module.exports = router;