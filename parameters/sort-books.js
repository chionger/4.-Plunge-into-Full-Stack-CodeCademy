/***
 * Excerpted from "Rediscovering JavaScript",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/ves6 for more book information.
***/
'use strict';
const sortByTitle = function(books) {
  const byTitle = function(book1, book2) {
    return book1.title.localeCompare(book2.title);
  };

  return books.slice().sort(byTitle);
};

const books = [
  { title: '1e: Who Moved My Cheese' },
  { title: '2e: Great Expectations' },
  { title: '3e: The Power of Positive Thinking' }
];

console.log(sortByTitle(books));
