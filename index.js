// 1. Function that takes a callback and calls it
function receivesAFunction(callback) {
    callback(); // Call the callback function
  }
  
  // 2. Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is a named function.");
    };
  }
  
  // 3. Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("This is an anonymous function.");
    };
  }
  