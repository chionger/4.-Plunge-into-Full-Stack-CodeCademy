/***
 * Excerpted from "Rediscovering JavaScript",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/ves6 for more book information.
***/
//BROKEN CODE
const unexpected = function() {
  let first
  second = 1;

  console.log(first);
  console.log(second);
}

unexpected();

console.log(second);
