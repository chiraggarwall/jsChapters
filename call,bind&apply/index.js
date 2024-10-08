// Question 1 - what is call?

var obj = { name: "Piyush" };
function sayHello(age, profession) {
  return "Hello" + this.name + age + profession;
}
console.log(sayHello.call(obj, 24, "Software Engineer"));

// Question 2 - what is apply?

var obj = { name: "Piyush" };
function sayHello(age, profession) {
  return "Hello" + this.name + age + profession;
}
console.log(sayHello.apply(obj, [24, "Software Engineer"]));

// Question 3 - what is bind?

const bindFunc = sayHello.bind(obj); //bind does not call function immediately just like call/apply rather return function after binding it with object
console.log(bindFunc(24, "Software Engineer"));

//Question 4 - what is the output?

var status = "hi";

setTimeout(() => {
  const status = "hey";

  const data = {
    status: "hu",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this)); //this never points to the function instead it will points context of the function.And in case of arrow function context comes from the parent function
}, 0);

// Question 5 - call print Animals such that it prints all animals in object

const animals = [
  {
    species: "Lion",
    name: "King",
  },
  {
    species: "whales",
    name: "Queen",
  },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#", i + "" + this.species + ":" + this.name);
  };

  this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

// call polyfill

let car1 = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for $${price}`
  );
}

// myCall pollfill
// let car1 = {
//     color: "Red",
//     company: "Ferrari",
// fn:purchaseCar;
//   };

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    //here this is points to function purchaseCar
    throw new Error(this + "It is not callable");
  }

  context.fn = this;
  context.fn(...args);
};

// purchaseCar.call(car1, 10000);
purchaseCar.myCall(car1, 10000);

//polyfill for apply;
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    //here this is points to function purchaseCar
    throw new Error(this + "It is not callable");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("Non-Array Error");
  }
  context.fn = this;
  context.fn(args);
};

purchaseCar.myApply(car1, [1000]);

//polyfill for bind

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    //here this is points to function purchaseCar
    throw new Error("Error");
  }
  context.fn = this;
  return function (...newArgs) {
    context.fn(...args, ...newArgs);
  };
};
let newFunc = purchaseCar.myBind(car1);
console.log(newFunc, "wdefrsdvs");
//all methods call/apply/bind are used to bind function with object but in bind case rather than calling function immediately it will return the function.
