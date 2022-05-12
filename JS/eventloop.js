//Async stuff in js
/* makeNetworkRequest();
while(!networkRequestReturned()){
    //just keep looping
}
//  runs after request returned
*/

// Call Stack

function multiply(a, b) {
  return a * b;
}

function square(n) {
  return multiply(n, n);
}

function printSquare(n) {
  var squared = square(n);
  console.log(squared);
}

printSquare(3);

//async representation

console.log("hi");

setTimeout(function () {
  console.log("there");
}, 5000);
console.log("hello ");
