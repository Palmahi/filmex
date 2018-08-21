const router = require('express').Router();

router.use('/movies', require('./movies'));

router.use((req, res, next) => {
  res.status(404).send('Not found');
});

module.exports = router;