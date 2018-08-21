const router = require('express').Router();
const { Movie } = require('../db/models');

module.exports = router;

router.get('/', (req, res, next) => {
  Movie.findAll()
  .then(movies => {
    res.json(movies)
  })
  .catch(next)
});
