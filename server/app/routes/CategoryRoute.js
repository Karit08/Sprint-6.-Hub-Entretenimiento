const express = require('express');
const router = express.Router();

const { GetMoviesCategory, GetSeriesCategory } = require('../controllers/CategoriasController'); // controlador de acceso a las peliculas y series con filtro por categoria

router.get('/MoviesC', GetMoviesCategory)
router.get('/SeriesC', GetSeriesCategory)

module.exports = router;