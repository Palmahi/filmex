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
    Movie.create({title: 'Casablanca', year: '1942', director: 'Michael Curtiz', duration: '103', description: "Rick Blaine (Humphrey Bogart), who owns a nightclub in Casablanca, discovers his old flame Ilsa (Ingrid Bergman) is in town with her husband, Victor Laszlo (Paul Henreid). Laszlo is a famed rebel, and with Germans on his tail, Ilsa knows Rick can help them get out of the country.", poster:'https://i.pinimg.com/originals/8d/aa/fa/8daafa47de895dfad3580cbc09eb7f20.jpg',
    rating: '5'}),
    Movie.create({title: 'Pacific Rim', year: '2013', director: 'Guillermo del Toro', duration: '131', description: "Long ago, legions of monstrous creatures called Kaiju arose from the sea, bringing with them all-consuming war. To fight the Kaiju, mankind developed giant robots called Jaegers, designed to be piloted by two humans locked together in a neural bridge. However, even the Jaegers are not enough to defeat the Kaiju, and humanity is on the verge of defeat. Mankind's last hope now lies with a washed-up ex-pilot (Charlie Hunnam), an untested trainee (Rinko Kikuchi) and an old, obsolete Jaeger.", poster:'https://st.kp.yandex.net/im/poster/2/3/0/kinopoisk.ru-Pacific-Rim-2308652.jpg',
    rating: '3'}),
    Movie.create({title: 'Lost in Translation', year: '2003', director: 'Sofia Coppola', duration: '102', description: "A lonely, aging movie star named Bob Harris (Bill Murray) and a conflicted newlywed, Charlotte (Scarlett Johansson), meet in Tokyo. Bob is there to film a Japanese whiskey commercial; Charlotte is accompanying her celebrity-photographer husband. Strangers in a foreign land, the two find escape, distraction and understanding amidst the bright Tokyo lights after a chance meeting in the quiet lull of the hotel bar. They form a bond that is as unlikely as it is heartfelt and meaningful.", poster:'https://st.kp.yandex.net/im/poster/2/6/0/kinopoisk.ru-Lost-in-Translation-2601458.jpg',
    rating: '4'}),
    Movie.create({title: 'Titanic', year: '1997', director: 'James Cameron', duration: '194', description: "James Cameron's 'Titanic' is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the 'ship of dreams' -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912.", poster:'https://st.kp.yandex.net/im/poster/1/8/8/kinopoisk.ru-Titanic-1887362.jpg',
    rating: '4'}),
    Movie.create({title: 'The Wizard of Oz', year: '1939', director: 'King Vidor', duration: '101', description: "When a tornado rips through Kansas, Dorothy (Judy Garland) and her dog, Toto, are whisked away in their house to the magical land of Oz. They follow the Yellow Brick Road toward the Emerald City to meet the Wizard, and en route they meet a Scarecrow (Ray Bolger) that needs a brain, a Tin Man (Jack Haley) missing a heart, and a Cowardly Lion (Bert Lahr) who wants courage. The wizard asks the group to bring him the broom of the Wicked Witch of the West (Margaret Hamilton) to earn his help.", poster:'https://st.kp.yandex.net/im/poster/7/7/7/kinopoisk.ru-The-Wizard-of-Oz-777959.jpg', 
    rating: '5',}),
    Movie.create({title: 'Mad Max', year: '2015', director: 'George Miller', duration: '120', description: "Years after the collapse of civilization, the tyrannical Immortan Joe enslaves apocalypse survivors inside the desert fortress the Citadel. When the warrior Imperator Furiosa (Charlize Theron) leads the despot's five wives in a daring escape, she forges an alliance with Max Rockatansky (Tom Hardy), a loner and former captive. Fortified in the massive, armored truck the War Rig, they try to outrun the ruthless warlord and his henchmen in a deadly high-speed chase through the Wasteland.", poster:'https://st.kp.yandex.net/im/poster/2/5/7/kinopoisk.ru-Mad-Max_3A-Fury-Road-2573655.jpg',
    rating: '5'}),
    Movie.create({title: 'The Godfather', year: '1972', director: 'Francis Ford Coppola', duration: '175', description: "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don's youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife, Kay (Diane Keaton), he is drawn deeper into the family business.", poster:'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    rating: '5'}),
    Movie.create({title: 'Mamma Mia!', year: '2008', director: 'Phyllida Lloyd', duration: '108', description: "Donna (Meryl Streep), an independent hotelier in the Greek islands, is preparing for her daughter's wedding with the help of two old friends. Meanwhile Sophie, the spirited bride, has a plan. She secretly invites three men from her mother's past in hope of meeting her real father and having him escort her down the aisle on her big day.", poster:'https://st.kp.yandex.net/im/poster/7/2/0/kinopoisk.ru-Mamma-Mia_21-720837.jpg',
    rating: '3'}),
    Movie.create({title: 'Pulp Fiction ', year: '1994', director: 'Quentin Tarantino', duration: '154', description: "Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, 'Pumpkin' (Tim Roth) and 'Honey Bunny' (Amanda Plummer).", poster:'http://cdn.playbuzz.com/cdn/dac569bf-891a-4bd8-86c7-17b180c2dd10/7ee1a852-a7d7-4c3c-83ce-1024244a8721.jpg',
    rating: '5'}),
    Movie.create({title: 'The Amazing Spider-Man 2', year: '2014', director: 'Marc Webb', duration: '142', description: "Confident in his powers as Spider-Man, Peter Parker (Andrew Garfield) embraces his new role as a hero and spends time with Gwen Stacy (Emma Stone) in between protecting New York from criminals. However, his greatest battle yet is about to begin. With the emergence of Electro (Jamie Foxx), Peter must confront an enemy far more powerful than he is. And when his old friend Harry Osborn (Dane DeHaan) returns, Peter comes to realize that all his enemies have one thing in common: Oscorp.", poster:'https://st.kp.yandex.net/im/poster/2/3/0/kinopoisk.ru-The-Amazing-Spider-Man-2-2301034.jpg',
    rating: '4'}),
    Movie.create({title: 'Harry Potter and the Prisoner of Azkaban', year: '2004', director: 'Alfonso Cuarón', duration: '142', description: "Harry Potter's (Daniel Radcliffe) third year at Hogwarts starts off badly when he learns deranged killer Sirius Black (Gary Oldman) has escaped from Azkaban prison and is bent on murdering the teenage wizard. While Hermione's (Emma Watson) cat torments Ron's (Rupert Grint) sickly rat, causing a rift among the trio, a swarm of nasty Dementors is sent to protect the school from Black. A mysterious new teacher helps Harry learn to defend himself, but what is his secret tie to Sirius Black?", poster:'https://st.kp.yandex.net/im/poster/1/3/5/kinopoisk.ru-Harry-Potter-and-the-Prisoner-of-Azkaban-1356208.jpg',
    rating: '5'}),
    Movie.create({title: 'La La Land', year: '2016', director: 'Damien Chazelle', duration: '128', description: "Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.", poster:'https://st.kp.yandex.net/im/poster/2/8/0/kinopoisk.ru-La-La-Land-2801972.jpg',
    rating: '5'})
  
])

  const genres = await Promise.all([
    Genre.create({genre: 'Action'}),
    Genre.create({genre: 'Romance'}),
    Genre.create({genre: 'Fantasy'}),
    Genre.create({genre: 'Adventure'}),
    Genre.create({genre: 'Drama'}),
    Genre.create({genre: 'Crime'}),
  ])
  
  // const addGenre = await Promise.all([
  //   Movie.findById(1).then(movie => movie.setGenre(2)), //([4,5])
  //   Movie.findById(2).then(movie => movie.setGenre(1)), 
  //   Movie.findById(3).then(movie => movie.setGenre(5)),
  //   Movie.findById(4).then(movie => movie.setGenre(5)),
  //   Movie.findById(5).then(movie => movie.setGenre(4)),
  //   Movie.findById(6).then(movie => movie.setGenre(1)),
  //   Movie.findById(7).then(movie => movie.setGenre(5)),
  //   Movie.findById(8).then(movie => movie.setGenre(2)),
  //   Movie.findById(9).then(movie => movie.setGenre(6)),
  //   Movie.findById(10).then(movie => movie.setGenre(1)),
  // ])


  const addTripsToCategories = await Promise.all([
    Genre.findById(1).then(movies => movies.addMovie([2,6,10])),//action
    Genre.findById(2).then(movies => movies.addMovie([1,4,8,12])), //romance
    Genre.findById(3).then(movies => movies.addMovie([11])), //fantasy
    Genre.findById(4).then(movies => movies.addMovie([5,6])), //adventure
    Genre.findById(5).then(movies => movies.addMovie([3,7])), //drama
    Genre.findById(6).then(movies => movies.addMovie(9)), //crime
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