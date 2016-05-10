/* A GUIDE TO USING FILTER */

/*
  
  Filter always builds a new array for you, without the index-value
  pairs that do not pass some critera inside your supplied test function.

  If you don't need to build a new filtered array, don't use `filter`.

  Like `map`, `filter` never modifies the original collection.

  NOTE: Since `filter` creates a new array for you, you will most likely
  assign the result to a variable.

    example:
    var filteredArray = filter(someArray, function(value, index) {
      if (value >= 98.6) {
        return true;
      } else {
        return false;
      }
    });

  NOTE2: this brand new array that `filter` returns can be referred to as an
  accumulator, or `acc` for short.

  `filter` makes use of the `each` function to iterate over a collection, so
  you don't have to worry about that!

*/


// the each function (we need it defined because `filter` uses it)
function each(collection, funcHolder) {
  if (Array.isArray(collection) === true) {
    for (var i = 0; i < collection.length; i++) {
      funcHolder(collection[i], i);
    }
  } else {
    for (var key in collection) {
      funcHolder(collection[key], key);
    }
  }
}


// the filter function, without comments:
function filter(array, testFunc) {
  var acc = [];

  each(array, function(value, index) {
    if (testFunc(value, index)) {
      acc.push(value);
    }
  });

  return acc;
}



// the filter function, with comments:
function filter(array, testFunc) {
  // set our accumulator to an empty array.
  var acc = [];

  /*
    iterate over the collection and build up our accumulator array.

    for each value and index, if they are passed into the testFunc as arguments
    and return `true`, push that value to the accumulator array
  */
  each(array, function(value, index) {
    if (testFunc(value, index)) {
      acc.push(value);
    }
  });

  // return as an output our built-up accumulator
  return acc;
}


/*
  The second argument, testFunc, MUST be a function definition.
  It is also known as a "callback" function because `filter` will
  call this function for you.

  You'll notice this works a LOT like the callback function when using `map`
  and `each`.

  ALWAYS keep these things in mind when writing this function definition:

  1. THIS FUNCTION DEFINITION MUST HAVE A RETURN STATEMENT.
      Given any value and index, the purpose of the return statement is to
      specify exactly what you want to add to this accumulator array.
      If the test function returns true for any value and index, that value
      will be included in your filtered output "accumulator" array.

  2. PARAMETERS (works just like `map`):
      a.  the first parameter will ALWAYS reference the VALUE
      b.  the second parameter will ALWAYS reference that value's INDEX,
          if you need it.

  3. The body (in between your curly brackets) of this callback function,
      testFunc, should contain some type of conditional statement to filter out
      EACH VALUE and INDEX in the collection. I like to think of this as a test
      function, because it allows you to run a "test" to see if each
      value-and-index pair passes your requirements.

  4. Given a value and index, make sure that whatever you have AFTER the
      return keyword is a boolean value.
      a.  `return true` if you want to include the value in your filtered array
      b.  `return false` if you do not want that value included
      c.  You actually don't need a `return false` for values that fail the
          test function, but it's good to have it to be clear in what you want
          to do.

  5. The trick is to always think of the VALUE and INDEX as any given value and
      index in the array.
      Do not worry about looping.
      Do not worry about pushing using ____.push()
      Do not worry about "keeping track of i" or evaluating "collection[i]".
*/





// --- arrays with filter --- //



// Given those rules, every time you call filter, it will look similar to this:

var animals = ['lion', 'sloth', 'whale', 'duck', 'seal'];

// value and index for parameters. Might help to always use these for arrays.
var output = filter(animals, function(value, index) {

  // for each value and index in the animals array, specify what you want to
  // filter using conditionals!
  // Remember: returning true will include the value; returning false will not.
  if (value !== 'something') {
    return true;
  } else {
    return false;
  }

  // Note: if you don't need to do anything with the index,
  // you may remove that parameter.
});


// if you ever forget how to use filter, always start like this:

// step 1: skeleton. Since we know our collection is an array, expect a new
// array as an output of calling `filter`. Let's assign a variable to store it.
var filteredArray = filter(ARRAY, FUNCTION);

// step 2: substitute array and function definition
var filteredArray = filter(animals, function() {});

// step 3: add parameters. Always have `value` and `index`, in that order.
var filteredArray = filter(animals, function(value, index) {});

// step 4: write whatever conditional tests you need for each value and index.
// Use `return true` to include something in the array you're building up.
var filteredArray = filter(animals, function(value, index) {
  if (value === 'sloth' || value === 'duck' || value === 'walrus') {
    return true;
  } else {
    return false;
  }
});

// The above code reads:
// using `filter` to build up a new filtered array,
// for each value and index in the animals array,
// if the value is either 'sloth', 'duck', or 'walrus',
// include that value in my filtered array
['sloth', 'duck'] // only added values that pass the test



// EXAMPLE with arrays:
// Question: Given an array of numbers, create a filtered array named
// bigNumbers that contains only the numbers that are greater than 99.

var myNumbers = [67, 99, 125, -12, 79, 141, 100];

var bigNumbers = filter(myNumbers, function(value, index) {
  if (value > 99) {
    return true;
  } else {
    return false;
  }
});

/*
  The above code into words:
    using `filter` to build up an array called bigNumbers...
      for each value and index in the myNumbers array,
        if the value is greater than 99,
          - include the value in the filtered array.
        otherwise, (the number must 99 or smaller)
          - do not include the value in the filtered array.
*/

// bigNumbers should now look like this:
[125, 141, 100]




// EXAMPLE with an array of objects:
// Question: Given an array of movies, filter out all movies that are
// rated PG-13.


var movies = [
  {
    title: 'WALL-E',
    genre: 'Adventure',
    year: 2008,
    rated: 'G'
  },
  {
    title: 'The Prestige',
    genre: 'Mystery',
    year: 2006,
    rated: 'PG-13'
  },
  {
    title: 'The Perks of Being a Wallflower',
    genre: 'Drama',
    year: 2012,
    rated: 'PG-13'
  },
  {
    title: '50/50',
    genre: 'Drama',
    year: 2011,
    rated: 'R'
  },
  {
    title: 'Blood Diamond',
    genre: 'Adventure',
    year: 2006,
    rated: 'R'
  },
  {
    title: 'Interstellar',
    genre: 'Sci-Fi',
    year: 2014,
    rated: 'PG-13'
  },
  {
    title: 'The Untouchables',
    genre: 'Drama',
    year: 2011,
    rated: 'R'
  },
  {
    title: 'Superbad',
    genre: 'Comedy',
    year: 2007,
    rated: 'R'
  },
];


var pg13Movies = filter(movies, function(value, index) {
  if (value.rated === 'PG-13') {
    return true;
  } else {
    return false;
  }
});


// Given 
// EXERCISE with `filter`:
// Write out the first three steps outlined above (on lines 167-183) at least
// five times below. Then, go back and write the body of all of your callback
// functions, doing something different every time.
// You can use the arrays given so far, or you can create your own!
// Create new, descriptive variable names for your output arrays.

// Some ideas:
// Movies that are not comedies or sci-fi
// Movies released before 2010
// Drama movies that are not rated R




















// ignore this
var ARRAY, FUNCTION;
//
