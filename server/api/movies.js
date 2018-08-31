const router = require('express').Router();
const { Movie } = require('../db/models');

module.exports = router;

router.get('/', (req, res, next) => {
  Movie.findAll({ include: [{ all: true }] })
  .then(movies => {
    res.json(movies)
  })
  .catch(next)
});

// router.get('/:id', (req, res, next) => {
//   Movie.findAll({
//     where: {
//       genreId: req.params.id
//     },
//   include: [{all: true}]})
//   .then(movies => res.send(movies))
//   .catch(next)
// });




