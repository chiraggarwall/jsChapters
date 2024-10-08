function x() {
    let a = 10;
    return function y() {
        console.log(a);

    }
}

let z = x();
z();




//clousers
function z() {
    var b = 7;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}
z();





// setTimeout --js not wait for none .As settimout comes in code ,js gives that piece of code to the timer and moves on
// var is fucntional scope
//use let instead as it is block scope

//in below code we learn 

//1.how settimeout uses clousers.
//2. different ways to invoke callback function(multiple times)  in settimeout using let,var,iife
//3.role of fucntional scope & block scope.







function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i)
        }, i * 1000);
    }
}
x();



//due to block scope and not having lexical environment.
function x() {
    for (let i = 0; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
}
x();



//due to functional scope and having lexical environment
function x() {
    for (var i = 1; i <= 5; i++) {
        function y(i) {

            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }

        y(i);

    }
}

x();




//function along with refernce to their lexical environment, come into play when fucntion is invoked outside of its parent scope
//case 1 : i points to var=6 
//case 2 : each settimeout has their own i reference as i is let
//case 3 : each settimeout has their own i due to functional scope of var and shadow scoping








// Advantages of clousers-curring,memoziation 
// data hiding -in this we encapsulates the data so that it will be not accessible by other fucntions.

// example of data hidding
function counter() {
    var count = 0;

    return function increment() {

        console.log(count++);


    }


}


let x = counter();
let y = counter();
x();
x();
y(); imp

//better way of writing above code using constructor function

function Counter() {
    let count = 0;
    this.increment = function () {
        console.log(count++);
    }
    this.decrement = function () {
        console.log(count--);
    }
}

var counter1 = new Counter();
counter1.increment();
counter1.decrement();

// disadvatages of clousers-overconsumption of memory&not garbage collected properly when programs completes
//garbage collector free up the unutilized memory of data variables

function outest() {
    let c = 10;
    function outer(b) {
        function inner() {
            console.log(a, b, c);
        }
        // var a=10
        let a = 10;
        return inner;
    }

}

// var close=outer();
// var close=outer("hello");
var close = outest("hello");
let a = 100;
close()