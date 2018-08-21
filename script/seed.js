const db = require('../server/db');

const {User, Movie, Genre} = require('../server/db/models');

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')


  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({ email: 'me@me.com', password: '123', isAdmin: true }),
    //User.create({ email: 'you@you.com', password: '123' })
  ])

  const movies = await Promise.all([
    Movie.create({title: 'The Wizard of Oz', year: '1939', director: 'King Vidor', duration: '101', description: "The Wizard of Oz stars legendary Judy Garland as Dorothy, an innocent farm girl whisked out of her mundane earthbound existence into a land of pure imagination. Dorothy's journey in Oz will take her through emerald forests, yellow brick roads, and creepy castles, all with the help of some unusual but earnest song-happy friends.", poster:'https://resizing.flixster.com/2Pcvd4HYmJ1bmoBfujhWvhqvj5E=/206x305/v1.bTsxMTE2ODA4NjtqOzE3ODU5OzEyMDA7ODAwOzEyMDA', 
    rating: '5',}),
    Movie.create({title: 'Mad Max', year: '2015', director: 'George Miller', poster:'https://resizing.flixster.com/_h9MUc-PcWJgWIYiOiAnKacGgPk=/206x305/v1.bTsxMTE5MTI3NjtqOzE3ODU5OzEyMDA7NTA5Ozc1NQ',
    rating: '4', description: "The Dorothy and creepy castles, all with the help of some unusual but earnest song-happy friends.", duration: '120'}),
  
])

  const genres = await Promise.all([
    Genre.create({genre: 'Action'}),
    Genre.create({genre: 'Romance'}),
    Genre.create({genre: 'Fantasy'})
  ])

  
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

console.log('seeding...');