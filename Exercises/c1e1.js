const result1 = function(){

return
  2*3;
}

const result2 = function(){

  return 2
    *3;
}

const result3 = function(){

  return 2*3
    ;
}

const result4 = function(){

  console.log("2.0"/2*"2.0")
  console.log(2/2*2)
  console.log("2.0"/2*"2.0"==2/2*2)
}

console.log(result1())
console.log(result2())
console.log(result3())
console.log(result4())
