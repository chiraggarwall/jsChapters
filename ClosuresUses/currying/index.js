//currying
//functional programming technique that involves transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument.

//why we use currying--> enhances code flexibility, readability, and reuse.

//example-1
function f(a) {
  return function (b) {
    return a + b;
  };
}
console.log(f(5)(6));

//example-2
function evalute(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else return "Invalid Operation";
    };
  };
}
const mul = evalute("sum");
console.log(mul(3)(5));

//example-3
//implement Infinite Currying --> console.log(add(5)(2)(4)(5)()); sum(1)(2)(3).....(n)\

function add(a) {
  return (b) => {
    if (b) return add(a + b);
    return a;
  };
}
console.log(add(5)(2)(4)(5)());

//example-4 -currying vs partial application

function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

const x = sum(10);
console.log(x(5, 6));
console.log(x(3, 2));

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

function updateElementText(id) {
  return function (content) {
    const element = (document.querySelector("#" + id).textContent = content);
  };
}

const updateHeader = updateElementText("heading");
updateHeader("Hello Rajat!");
updateHeader("Hello leela!");
