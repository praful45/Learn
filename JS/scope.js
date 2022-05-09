// variable scope

var name = "hello"; //global scope

function x() {
  var name = "world"; //local scope
  console.log(name);
  sample = "this is sample"; //here first it search sample in global
  //it doesn't find and create sample variable globally
}

x();
console.log(name);
y();

function y() {
  console.log(name); // here first it looks for name variable locally .. it wil not find that then it look for globally
  console.log(sample); //since sample created globally we can access it
}
