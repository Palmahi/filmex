const router = require('express').Router();
const { Genre } = require('../db/models');
const { Movie } = require('../db/models');

module.exports = router;

router.get('/', (req, res, next) => {
  Genre.findAll({ include: [{ all: true }] })
  .then(genres => {
    res.json(genres)
  })
  .catch(next)
});


