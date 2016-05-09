/* A GUIDE TO USING EACH */

// `each` can loop over an array's values and indexes
// OR over an object's values and keys.


// without comments:
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


// with comments:
function each(collection, funcHolder) {
  // if the collection is an array
  if (Array.isArray(collection) === true) {
    // use the for loop like normal
    for (var i = 0; i < collection.length; i++) {
      funcHolder(collection[i], i);
    }
  // otherwise, the collection is an object
  } else {
    // use the for-in loop for the object
    for (var key in collection) {
      funcHolder(collection[key], key);
    }
  }
}


/*
  The second argument, funcHolder, MUST be a function definition.
  It is also known as a "callback" function because `each` will
  call this function for you.

  ALWAYS keep these things in mind when writing this function definition:

  1. If the collection is an array,
      a.  the first parameter will ALWAYS reference the VALUE
      b.  the second parameter will ALWAYS reference that value's INDEX,
          if you need it.

  2. If the collection is an object,
      a.  the first parameter will ALWAYS reference the VALUE
      b.  the second parameter will ALWAYS reference that value's KEY
          or PROPERTY

  3. The body (in between your curly brackets) of this callback function,
      funcHolder, should be what you want to do for EACH VALUE and EACH
      INDEX/KEY in the collection.

  4. The trick is to always think of the VALUE and INDEX as any given value and
      index in the array.
      Do not worry about looping.
      Do not worry about "keeping track of i".
*/





// --- arrays with each --- //



// Given those rules, every time you call each, it will look similar to this:

var animals = ['lion', 'sloth', 'whale', 'duck', 'seal'];

// value and index for parameters. Might help to always use these for arrays.
each(animals, function(value, index) {
  // for each value and index in the animals array, do whatever you need to do!
  // Note: if you don't need to do anything with the index,
  // you may remove that parameter.
});


// if you ever forget how to use each, always start like this for arrays:

// step 1: skeleton
each(ARRAY, FUNCTION);                      

// step 2: substitute array and function definition
each(animals, function() {});

// step 3: add parameters
each(animals, function(value, index) {});

// step 4: do whatever you need to do for each value and index
each(animals, function(value, index) {
  console.log(index + ': ' + value);
});

// The above code reads:
// for each value and index in the animals array,
// print to the console in this format... `index: value`



// EXAMPLE with arrays:
// Question: Given an array of numbers, push the string 'even' or 'odd' into a
// separate array named numType.

var myNumbers = [11, 7, 4, 20, 15];
var numType = [];

each(myNumbers, function(value, index) {
  if (value % 2 === 0) {
    numType.push('even');
  } else {
    numType.push('odd');
  }
});

/*
  The above code into words:
    for each value and index in the myNumbers array,
      if the number is even,
        - push the string 'even' to the end of the numType array.
      otherwise, (the number must be false)
        - push the string 'odd' to the end of the numType array.
*/

// numType should now look like this:
['odd', 'odd', 'even', 'even', 'odd']


// EXERCISE with arrays:
// Write out the first three steps outlined above (on lines 86-100) at least
// five times below. Then, go back and write the body of all of your callback
// functions, doing something different every time.
// You can use the arrays given so far, or you can create your own!


















// --- objects with each --- //



var boston = {
  state: 'MA',
  zip: 02111,
  county: 'Suffolk',
  website: 'cityofboston.gov'
};

// Given those rules, every time you call each, it will look similar to this:

// value and key for parameters. Might help to always use these for objects.
each(boston, function(value, key) {
  // for each value and key in the boston object, do whatever you need to do!
  // Note: if you don't need to do anything with the key,
  // you may remove that parameter.
})

// if you ever forget how to use each, always start like this for objects:

// step 1: skeleton
each(OBJECT, FUNCTION);

// step 2: substitute object and function definition
each(boston, function() {});

// step 3: add parameters
each(boston, function(value, key) {});

// step 4: do whatever you need to do for each value and key
each(boston, function(value, key) {
  console.log(key + ': ' + value);
});

// The above code reads:
// for each value and key in the boston object,
// print to the console in this format... `key: value`



// EXAMPLE with objects:
// Question: Using the boston object above,
// push each value into a separate array named bostonVals, and
// push each key into a separate array named bostonKeys.

var boston = {
  state: 'MA',
  zip: 02111,
  county: 'Suffolk',
  website: 'cityofboston.gov'
};

var bostonValues = [];
var bostonKeys = [];

each(boston, function(value, key) {
  bostonValues.push(value);
  bostonKeys.push(key);
});

/*
  The above code into words:
    for each value and key in the boston object,
      - push the value to the end of the bostonValues array.
      - push the key to the end of the bostonKeys array.
*/

// bostonValues and bostonKeys should now look something like this:

['MA', 02111, 'Suffolk' 'cityofboston.gov']  // bostonValues
['state', 'zip', 'country', 'website']       // bostonKeys


// EXERCISE with objects:
// Write out the first three steps outlined above (on lines 179-193) at least
// five times below. Then, go back and write the body of all of your callback
// functions, doing something different every time.
// You can use the boston object given so far, or you can create your own!

















