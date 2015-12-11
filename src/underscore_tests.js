/*jshint eqnull:true, expr:true*/

var _ = { };

/* var underscore = require('lodash'); */

(function() {

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
      var newArr = [];
      if (n > array.length) {
        n = array.length;
      }
      if (n === undefined) {
        newArr = array[0];
      }
      else {
        for (var i = 0; i < n; i++) {
          newArr.push(array[i]);
        }
      }
      return newArr;
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
      var newArr = [];
      var len = array.length;
      if (n > len) {
        n = len;
      }
      if (n === undefined) {
        newArr = array[len - 1];
      }
      else {
        for (var i = len - 1; i > len - 1 - n; i--) {
          newArr.unshift(array[i]);
        }
      }
    return newArr;
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.

  function isObject ( ob ) {
    return ob && (typeof ob  === "object");
  }

  function isArray ( ob ) {
    return isObject(ob) && (ob instanceof Array);
  }

  _.each = function(collection, iterator) {

      if (isObject(collection)) {
        if (!isArray(collection)) {
          for (var p in collection) {
            iterator(collection[p], p, collection);
          }
        }
        else { // if array
          for (var i = 0; i < collection.length; i++) {
            iterator(collection[i], i, collection);
          }
        }
      }

  };

  /* _.each = function(collection, iterator) {
      _.forEach(collection, iterator(collection[key], key, collection))
  }; */

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    for (var i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i;
        break;
      }
    }
    return -1;
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, iterator) {
    var newArr = [];
    for (var i = 0; i < collection.length; i++) {
      if (iterator(collection[i]))
        newArr.push(collection[i]);
    }
    return newArr;
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, iterator) {
    var newArr = [];
    for (var i = 0; i < collection.length; i++) {
      if (!iterator(collection[i]))
        newArr.push(collection[i]);
    }
    return newArr;
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var newArr = [];
    // populate newArr
    for (var i = 0; i < array.length; i++) {
      if (newArr.indexOf(array[i]) === -1) // if not already in array
        newArr.push(array[i]);
    }
    return newArr;
  };


  // Return the results of applying an iterator to each element.
  _.map = function(array, iterator) {
    for (var i = 0; i < array.length; i++)
      array[i] = iterator(array[i]);
    return array;

  };

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(array, propertyName) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      newArray.push(array[i] [propertyName]);
    }
    return newArray;
  };

  // Calls the method named by methodName on each value in the list.
  _.invoke = function(list, methodName, args) {
      for (var i = 0; i < list.length; i++) {
        if (methodName === 'sort' || methodName === Array.prototype.sort)
          list[i].sort();
      }

      return list;
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(previousValue, item) for each item. previousValue should be
  // the return value of the previous iterator call.
  _.reduce = function(collection, iterator, initialValue) {
    var ret = 0;
    var prev = 0;
    if (initialValue)
      prev = initialValue;
    if (isObject(collection)) {
      if (!isArray(collection)) { // if object
        for (var p in collection) {
          ret = iterator(prev, collection[p]);
          prev = ret;
        }
      }
      else { // if array
        for (var i = 0; i < collection.length; i++) {
          ret = iterator(prev, collection[i]);
          prev = ret;
        }
      }
    }
    return ret;
  };

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    var found = false;

    if (isObject(collection)) {
      if (!isArray(collection)) { // if object
        for (var p in collection) {
          if (collection[p] === target) {
            found = true;
            break;
          }
        }
      }
      else { // if array
        for (var i = 0; i < collection.length; i++) {
          if (collection[i] === target) {
            found = true;
            break;
          }
        }
      }
    }
    return found;
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
      var test = true;
        for (var i = 0; i < collection.length; i++) {
          if (iterator !== undefined) {
            if (!iterator(collection[i])) {
                test= false;
                break;
            }
          }
          else if(!collection[i]) {
            test = false
            break;
          }
        }
      return test
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
      var test = false;
      for (var i = 0; i < collection.length; i++) {
        if (iterator !== undefined) {
          if (iterator(collection[i])) {
              test= true;
              break;
          }
        }
        else if(collection[i]) {
          test = true
          break;
        }
      }
      return test

  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  _.extend = function(obj) {
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
  };


  /**
   * FUNCTIONS
   * =========
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
  };

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // Memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
  };



  // Shuffle an array.
  _.shuffle = function(array) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

}).call(this);
