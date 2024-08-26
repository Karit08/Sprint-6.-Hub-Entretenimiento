const express = require('express');
const router = express.Router();

const {getFavorites, AddFavorites, deletefavorites} = require('../controllers/favoritesController');

router.get('/favorites', getFavorites);
router.post('/Addfavorites', AddFavorites);
router.post('/deletefavorites', deletefavorites);

module.exports = router