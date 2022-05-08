console.log(5 === 5); //true

cl(5 === "5"); //false
cl(5 == "5"); //true

cl(false == 0); //true
cl(false === 0); //false --> here false and 0 is different type and different value

// while comparing with double equals JS does type coercion
// That means JS first convert the values into common type and then compare them

// so the difference is ... triple equals === is strict comparison
// meanwhile double equals is not so
//the best use case is... use ===

/* 
six flasy value in JS are 

- false --> boolean false
- 0 --> zeor number
- "" -->empty string
- null
- undefined
- NaN - not a number

*/

cl(null == undefined); //true
cl(null == null); //true

cl(null == NaN); //false
cl(NaN == NaN); //false

cl(false == null); //false
cl(false == 0); // true

// In falsy values lose equality comparison of false,0 and "" gives true
// similarly null and undefined comparison gives true
// but if comparison between first and second gives false

// --> NaN is not equal to any other falsy value
// --> it is not equal to itself as well

function cl(a) {
  console.log(a);
}
