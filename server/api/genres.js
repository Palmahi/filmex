const router = require('express').Router();
const { Genre } = require('../db/models');

module.exports = router;

router.get('/', (req, res, next) => {
  Genre.findAll()
  .then(genres => {
    res.json(genres)
  })
  .catch(next)
});