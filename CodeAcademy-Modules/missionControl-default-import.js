import{availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';  //note import and use as it is

function displayFuelCapacity() {
availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

displayFuelCapacity();

function displayStaffStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  }
  )};

  displayStaffStatus();
