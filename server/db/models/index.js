//require all models
const Genre = require('./genre');
const Movie = require('./movie');
const User = require('./user');
//const Watchlist = require('./watchlist');

//movie belongs to (associations)
Genre.belongsToMany(Movie, {through: 'MovieGenre'});
Movie.belongsToMany(Genre, {through: 'MovieGenre'});

//Watchlist.belongsTo(User);

// Order.belongsTo(Trip);
// //CartId on Order
// Cart.hasMany(Order);
// Order.belongsTo(Cart);
// //UserId on Cart
// User.hasMany(Cart);
// Cart.belongsTo(User);

//export all modules
module.exports = {
  Genre,
  Movie,
  User,
  //Watchlist
};