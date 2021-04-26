const module = {
  x: 42,
  getX: function() {
    console.log('Scope',this);
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

//Interestingly goes direct to getX.  cannot find, goes direct to global.


const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

//after bind, cannot find goes to module and not straight to global like previous case.
