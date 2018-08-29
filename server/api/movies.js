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

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movies => res.send(movies))
  .catch(next)
})





