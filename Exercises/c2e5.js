'use strict';

const person = Object.freeze({name:'John Doe', address:{street:'101 Main St.', City:'New York'}});

person.address.street = '102 Main St.';

console.log(person);
