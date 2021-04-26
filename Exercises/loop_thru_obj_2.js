let spaceship = {
    crew: {
    captain: {
        name: 'Lily',
        degree: 'Computer Engineering',
        cheerTeam() { console.log('You got this!') }
        },
    'chief officer': {
        name: 'Dan',
        degree: 'Aerospace Engineering',
        agree() { console.log('I agree, captain!') }
        },
    medic: {
        name: 'Clementine',
        degree: 'Physics',
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna',
        degree: 'Conservation Science',
        powerFuel() { console.log('The tank is full!') }
        }
    }
};

// Write your code below
for (let crewMemberRole in spaceship.crew){
  console.log(`${crewMemberRole} : ${spaceship.crew[crewMemberRole].name}`) // because 'chief officer' has space in between.  Therefore need to use bracket selector.
}

for (let crewMemberRole in spaceship.crew){
  console.log(`${spaceship.crew[crewMemberRole].name} : ${spaceship.crew[crewMemberRole].degree}`);
}
