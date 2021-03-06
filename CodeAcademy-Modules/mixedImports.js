import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

function displayFuelCapacity() {
  aircrafts.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
};

function displayStaffStatus(){
  aircraftss.forEach(function(element){
    console.log(`${element.name} meets staff requirements: ${meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff)}`);
  });
};

function displaySpeedRangeStatus(){
  aircrafts.forEach(function(element){
  console.log(element.name + 'meets speed range requirements: ' + meetsStaffReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
  });
};

displaySpeedRangeStatus()
