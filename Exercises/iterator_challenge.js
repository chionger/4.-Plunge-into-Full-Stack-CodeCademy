const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
//   console.log('words',words);
//   console.log('word',word);
// console.log(word +'-----=');
// console.log(word.length < 6);
  return word.length < 6;
} //  if use {} must be accompanied with return
));

console.log(words.some(word =>{
  word.length < 6;
} //  if use {} without return, wrong answer will be provided
));
//
// console.log(words.some(word =>
//   return word.length < 6;//  if simplify, cannot use with return or syntax error
// ));
console.log(words.some(word =>word.length < 6));
// no ; required for simplified version too as only takes 1 statement
