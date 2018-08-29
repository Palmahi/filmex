//require all models
const Genre = require('./genre');
const Movie = require('./movie');
const User = require('./user');
//const Watchlist = require('./watchlist');

//movie belongs to (associations)

Genre.hasMany(Movie);
Movie.belongsTo(Genre)


//export all modules
module.exports = {
  Genre,
  Movie,
  User,
  //Watchlist
};