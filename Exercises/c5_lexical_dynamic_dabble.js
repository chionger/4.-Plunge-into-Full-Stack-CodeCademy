// // console.log([1,2,3].map(function(e) {return e*2;}));
//
// //lexical - scope where function using the variables is defined
// //dynamic - provided by caller for the function
// // this.stuff='from lexical scope';
// this.stuff = 'from lexical scope';
// console.log(this);
// const someValue=4;
// const self=this;
//
// // console.log('Lexical this :',this);
//
// setTimeout(function () {
//   // console.log('Dynamic this :',this);
//   console.log('someValue is ' + someValue);
//   console.log('this... ' + this.stuff);
//   console.log('self... ' + self.stuff);
// },1000);

//FINDINGS - LEXICAL SCOPE FOR THIS !  EXAMPLE IS NOT GOOD

// const create = function(message){
//   console.log('First argument to create: ' + arguments[0]);
//   return function(){
//     console.log('First argument seen by greet: ' + arguments[0]);
//   };
// };
//
// const greet = create('some value');
//
// greet('hi');


const create = function(message){
  console.log('First argument to create: ' + arguments[0]);
  return ()=> console.log('First argument seen by greet: ' + arguments[0]);
  };

const greet = create('some value');

greet('hi');
