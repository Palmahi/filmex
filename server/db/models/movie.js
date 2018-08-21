const Sequelize = require('sequelize');
const db = require('../db');

const Movie = db.define('movie', {
  title: {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.INTEGER
  },
  director: {
    type: Sequelize.STRING,
  },
  duration: {
    type: Sequelize.INTEGER,
    get() {
      return this.duration + 'min';
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  poster: {
    type: Sequelize.TEXT
  },
  rating: {
    type: Sequelize.VIRTUAL,
    min: 1,
    max: 5
    //total ratings added divided by total users that rated
    // 40 / 10 = 4 stars
  }
})

module.exports = Movie;