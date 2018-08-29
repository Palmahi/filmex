const router = require('express').Router();
const { Genre } = require('../db/models');
const { Movie } = require('../db/models');

module.exports = router;

router.get('/', (req, res, next) => {
  Genre.findAll()
  .then(genres => {
    res.json(genres)
  })
  .catch(next)
});


router.get('/:id', (req, res, next) => {
  Movie.findAll({
    where: {
      genreId: req.params.id
    },
  include: [{all: true}]})
  .then(movies => res.send(movies))
  .catch(next)
});