let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
};

const capFave = spaceship.crew.captain['favorite foods'][0];

spaceship.passengers = [{angel:{age:34, seat: '34A'}}, {betty:{age:44, seat: '55C'}}];

const firstPassenger = spaceship.passengers[0].angel.age;

const firstPassengerAlt = spaceship.passengers[0]['angel'].age;

console.log('first passenger' + firstPassenger);
console.log('first passenger alt' + firstPassengerAlt);
