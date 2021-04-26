vacationSpots = ['New York', 'London', 'Paris'];

const greet=function(...values){
  console.log('vacation',values.join(','));
};

greet(...vacationSpots);
