/* A GUIDE TO USING MAP */

/*

  Map always builds a new array or object for you.
  If you don't need to build a new array or object, don't use `map`.

  `map` creates:
  a brand new array based on the VALUES and INDEXES of a given array
  OR
  a brand new object based on the VALUES and KEYS of a given object


  NOTE: Since map creates a new collection for you, you will most likely assign
  the result to a variable.

    example:
    var doubledArray = map(collection, function(value, index) {
      return value * 2;
    });

  NOTE2: this brand new array or object that `map` returns can be referred to
  as an accumulator, or `acc` for short.

  NOTE3: this brand new array/object will ALWAYS have the same number of
  items as the original array/object. If it's an object, the new output object
  will also hold the same exact key names as the original.


  `map` makes use of the `each` function to iterate over a collection, so
  you don't have to worry about that!

*/


// the each function (we need it defined because `map` uses it)
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


// the map function, without comments:
function map(collection, transformFunc) {
  var acc = [];

  if (Array.isArray(collection) === false) {
    acc = {};
  }

  each(collection, function(value, key) {
    acc[key] = transformFunc(value, key);
  });

  return acc;
}


// the map function, with comments:
function map(collection, transformFunc) {
  // set our accumulator to an empty array.
  var acc = [];

  if (Array.isArray(collection) === false) {
    // if `collection` is NOT an array, which means it is an object, reassign
    // the accumulator to an empty object.
    acc = {};
  }

  /*
    iterate over the collection and build up our accumulator array/object.
    NOTE:
      if it's an ARRAY:
        for each value and key (really an index, since it's an array), create
        a new index on our `acc` array and assign the value RETURNED of calling
        our transformFunc (this will be the main point for the guide below)
      if it's an OBJECT:
        for each value and key (still a key, since it's an object), create
        a new key on our `acc` object and assign the value RETURNED of calling
        our transformFunc (this will be the main point for the guide below)
  */
  each(collection, function(value, key) {
    acc[key] = transformFunc(value, key);
  });

  // return as an output our built-up accumulator
  return acc;
}


/*
  The second argument, transformFunc, MUST be a function definition.
  It is also known as a "callback" function because `map` will
  call this function for you.

  You'll notice this works a LOT like the callback function when using `each`.

  ALWAYS keep these things in mind when writing this function definition:

  1. THIS FUNCTION DEFINITION MUST HAVE A RETURN STATEMENT.
      Given any value and index (or value and key), the purpose of the return
      statement is to specify exactly what you want to add to this accumulator
      array or object.

  2. If the collection is an array,
      a.  the first parameter will ALWAYS reference the VALUE
      b.  the second parameter will ALWAYS reference that value's INDEX,
          if you need it.
      c.  your accumulator will be an array.

  3. If the collection is an object,
      a.  the first parameter will ALWAYS reference the VALUE
      b.  the second parameter will ALWAYS reference that value's KEY
          or PROPERTY
      c.  your accumulator will be an object.

  3. The body (in between your curly brackets) of this callback function,
      funcHolder, should be what you want to do for EACH VALUE and EACH
      INDEX/KEY in the collection. I like to think of this as a transform
      function, because it allows you to first specify or transform the value
      before adding something to the accumulator array/object.

  4. Given a value and (index/key), make sure that whatever you have AFTER the
      return keyword is what you want to add to the resulting accumulator
      array/object.

  5. The trick is to always think of the VALUE and INDEX as any given value and
      index in the array (or VALUE and KEY in the object).
      Do not worry about looping.
      Do not worry about pushing using ____.push()
      Do not worry about "keeping track of i" or evaluating "collection[key]".
      Do whatever you need to do for each value and index to add whatever you
        want to put inside your accumulator array/object (using RETURN).
*/





// --- arrays with map --- //



// Given those rules, every time you call map, it will look similar to this:

var animals = ['lion', 'sloth', 'whale', 'duck', 'seal'];

// value and index for parameters. Might help to always use these for arrays.
var output = map(animals, function(value, index) {

  // for each value and index in the animals array, do whatever you need to do!
  // add ????? to build up the array using the RETURN keyword.
  return /* something */;

  // Note: if you don't need to do anything with the index,
  // you may remove that parameter.
});


// if you ever forget how to use map, always start like this for arrays:

// step 1: skeleton. Since we know our collection is an array, expect a new
// array as an output of calling `map`. Let's assign a variable to store it.
var outputArray = map(ARRAY, FUNCTION);

// step 2: substitute array and function definition
var outputArray = map(animals, function() {});

// step 3: add parameters
var outputArray = map(animals, function(value, index) {});

// step 4: do whatever you need to do for each value and index.
// USE THE `RETURN` KEYWORD to add something to the array you're building up.
var outputArray = map(animals, function(value, index) {
  return value + 'at ' + index;
});

// The above code reads:
// using `map` to build up a new array,
// for each value and index in the animals array,
// add a new string to the new output array in this format... `value at index`
// outputArray now holds this array:
['lion at 0', 'sloth at 1', 'whale at 2', 'duck at 3', 'seal at 4']



// EXAMPLE with arrays:
// Question: Given an array of numbers, create an array named numType that
// holds string values to represent each number as even or odd.

var myNumbers = [11, 7, 4, 20, 15];

var numType = map(myNumbers, function(value, index) {
  if (value % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

/*
  The above code into words:
    using `map` to build up an array called numType,
      for each value and index in the myNumbers array,
        if the number is even,
          - add the string 'even' to the output array.
        otherwise, (the number must be false)
          - add the string 'odd' to the output array.
*/

// numType should now look like this:
['odd', 'odd', 'even', 'even', 'odd']


// EXERCISE with arrays:
// Write out the first three steps outlined above (on lines 167-183) at least
// five times below. Then, go back and write the body of all of your callback
// functions, doing something different every time.
// You can use the arrays given so far, or you can create your own!
// Create new, descriptive variable names for your output arrays.

















// --- objects with map --- //


// Given those rules, every time you call map, it will look similar to this:

var boston = {
  state: 'MA',
  zip: 02111,
  county: 'Suffolk',
  website: 'cityofboston.gov'
};

// value and key for parameters. Might help to always use these for objects.
var output = map(boston, function(value, key) {

  // for each value and index in the boston object, do whatever you need to do!
  // add ????? to build up the object using the RETURN keyword.
  return /* something */;

  // Note: if you don't need to do anything with the key,
  // you may remove that parameter.
});


// if you ever forget how to use map, always start like this for objects:

// step 1: skeleton. Since we know our collection is an array, expect a new
// array as an output of calling `map`. Let's assign a variable to store it.
var outputObject = map(OBJECT, FUNCTION);

// step 2: substitute array and function definition
var outputObject = map(boston, function() {});

// step 3: add parameters
var outputObject = map(boston, function(value, key) {});

// step 4: do whatever you need to do for each value and key.
// USE THE `RETURN` KEYWORD to add something to the object you're building up.
var outputObject = map(boston, function(value, key) {
  return 'I like ' + value;
});

// The above code reads:
// using `map` to build up a new object (with the same keys),
// for each value and key in the boston object,
// add a key with the same name to the output object, where the value of that
// key will be the string 'I like ' concatenated with the original value.
// outputObject now holds this object:
{
  state: 'I like MA',
  zip: 'I like 02111',
  county: 'I like Suffolk',
  website: 'I like cityofboston.gov'
}



// EXERCISE with objects:
// Write out the first three steps outlined above (on lines 269-285) at least
// five times below. Then, go back and write the body of all of your callback
// functions, doing something different every time.
// You can use the boston object given so far, or you can create your own!
// Create new, descriptive variable names for your output objects.
















