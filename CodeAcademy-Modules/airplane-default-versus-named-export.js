//Export default

let Airplane = {
  availableAirplanes: [
    {
    name: 'AeroJet',
    fuelCapacity: 800
    },
    { name: 'SkyJet',
    fuelCapacity: 500
    }
    ],
};

export default Airplane;

//Named export
let availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots','flightAttendants','engineers','medicalAssistance','sensorOperators']
 },
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots','flightAttendants']
 }
];

let flightRequirements ={
  requiredStaff: 4
};

function meetsStaffRequirements(availableStaff, requiredStaff){
  if (availableStaff.length >= requiredStaff){
    return true;
  } else{
    return false;
  }
}

export {availableAirplanes, flightRequirements, meetsStaffRequirements};
