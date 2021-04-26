let spaceship = {
  homePlanet : 'Earth',
  color : 'red'
};

console.log('Object spaceship ',spaceship);

let tryReassignment = obj => {
  obj = { //function creates a new object with same name in confined scope and does not say anything about what happen to the first object.
    identified : false,
    'transport type' : 'flying'
  }
  console.log('Inner Obj ', obj) // Prints {'identified': false, 'transport type': 'flying'}
};  //NOTE : called same name but different objects that do not know the existence of each other !!!

tryReassignment(spaceship) // The attempt at reassignment does not work.

console.log('Outside reassignment, back to original', spaceship);
// spaceship // Still returns {homePlanet : 'Earth', color : 'red'};

spaceship = {
  identified : false,
  'transport type': 'flying'
}; // Regular reassignment still works.

console.log('After regular reassignment ', spaceship);
