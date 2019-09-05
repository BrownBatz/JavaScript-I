// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
const log = (string) => {
    return console.log(string);
}
log("Function was invoked");


// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
const anotherFunction = (anotherString) => {
    return anotherString;
}
anotherFunction("Testing out another string.");

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
const add = (a,b) => {
    return a + b;
}
console.log(add(5, 2));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
const subtract = (a,b) => {
    return a - b;
}
console.log(subtract(5, 2));


// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);