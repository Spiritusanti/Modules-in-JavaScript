// what is a module?
// --> give us a way to organize variables and functions in relation to scope just below the global scope and just above the function scope.

// module pattern:
//  --> solved with closures and things like IIFEs:
(function() {
  //function code
})()

// if we want other modules to have access to that function:

var exampleModule = (function() {
  //function code --> returns something
})()

// this allows us to assign the return of the IIFE to a variable that is callable by other modules in the outside world.
// the internal code can't be touched by any other function.
// This is called the revealing module pattern

// pros and cons:
//--> only revealing one varialble to the global scope. Improves maintainabilty and contains functionality. Makes a program more loosely coupled.

// --> however we are still technically polluting the global namespace with the module variables. Those variables can still be chenged completely. Dependences can be an issue --> need to be careful of the order of script tags and make sure they are loaded in the correct order.


// after the module pattern came CommonJS and AMD (Asynchronus Module Definition).

// CommonJS: much cleaner and used in Node.js and mainly server-side. Modules are meant to be loaded synchronusly. Not ideal for browsers....
var module1 = require('module1')//.fight;
var module2 = require('module2')

function fight() {

}

module.exports = {
  fight: fight
};

// Browserify --> By reading require and export, allows the use of modules in the browser by reading the script and outputting it into a bundle. This creates one giant script that is loaded at the same time. 

// AMD: doesn't look as clean as CommonJS. Designed specifically for browsers to load modules asynchronusly. 

define(['module1', 'module2'],
function(module1Import, module2Import) {
  var module1 = module1Import//.fight;
  var module2 = module2Import //.importFunc2;

  function dance() {

  }
  return {
    dance: dance,
  };
});

// How do we unite the JavaScript community around modules? Create native module support!

//  ES6 Modules:
import module1 from 'module1'//.fight;
import module2 form 'module2';

export function jump() {

}

// now we have a native keyword 'import' that allows us to load from anywhere we want and the 'export' keyword allows us to do the reverse. This makes modules very easy to use!

// however, for the browser to understand you have to define modules with type="module" in the html. We also need to serve it from a server and specify where the module lives.
