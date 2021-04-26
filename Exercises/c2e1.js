function first() {
  for (i = 1; i < 5; i++) {
    second();
  }
}

function second() {
  for (i = 1; i < 3; i++) {
    console.log(i);
  }
}

first();
