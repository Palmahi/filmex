//require all models
const Genre = require('./genre');
const Movie = require('./movie');
const User = require('./user');
//const Watchlist = require('./watchlist');

//movie belongs to (associations)

// Genre.hasMany(Movie);
// Movie.belongsTo(Genre)

Genre.belongsToMany(Movie, {through: 'MovieGenre'});
Movie.belongsToMany(Genre, {through: 'MovieGenre'});


//export all modules
module.exports = {
  Genre,
  Movie,
  User,
  //Watchlist
};