// Immediately Invoked Function Expression (IIFE)

(function () {
  console.log("the number is 4");
})();

(hello = function (num = 5) {
  console.log("the number is " + num);
})();

hello(10);

//

var a = 8;
(function () {
  var a = 6;
  console.log(a);
})();
console.log(a);

//
let b = 8;
{
  let b = 6;
  console.log(b);
}
console.log(b);
