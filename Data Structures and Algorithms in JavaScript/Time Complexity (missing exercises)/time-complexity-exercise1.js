/*
  ********
  1 - w/ a for loop
*/

var countChars = function(str) {
  var count = 0;

  for(var i = 0; i < str.length; i++) {
    count++
  }

  return count;
}

countChars('dance');

countChars('walk');

// console.log(countChars('dance'));

// console.log(countChars('walk'));

/*
  ********
  2 - w/ provided JS properties (is this an example of a getter?) like 'length'
*/

var countChars = function(str) {
  var count = 0;
  return str.length;
}

countChars('dance');

countChars('walk');

// console.log(countChars('dance'));

// console.log(countChars('walk'));

/*
  ********
  3 - w/ provided JS methods push() and unshift()'
    - calculate the time complexity for the native methods below (separately)
*/

var myList = ['hello', 'hola'];

myList.push('bonjour'); // O(n) - linear

myList.unshift(); // O(n) - linear

