const cart = ['shoes', 'pants', 'kurta'];

//Using callbacks
createOrder(cart, function (orderId) {//makes the code dependable
    proceedToPayment(orderId);
})



//What is Promise-->Promise is an object representing eventual completion of async js operation.
const Promise = createOrder(cart);
Promise.then(function (orderId) {//fucntion is attached not dependable means our fucntion gets called once only
    proceedToPayment(orderId);
});




//Promise chaining to avoid callback hell issue
//then is callback function which takes two argument functions one is for fullfilled status & other for reject status of promise
//catch is same as then but takes only rejected status function


const Promisee = createOrder(cart);
Promisee.then(function (orderId) {
    return paymentInfo;
}).then(function (paymentInfo) {
    console.log('hello')
})


//Creating a promise 
function createOrder() {

    const pr = new Promise((resolve, reject) => {
        if (1) {
            resolve('123');
        }
        else {
            const error = new Error('err')
            reject(error);
        }
    })
    return pr;
}



//Error handling

Promisee.then(function (orderId) {
    return paymentInfo;
}).then(function (paymentInfo) {
    console.log('hello')
}).catch((err) => {   //catch is same as then but takes only rejected status function as argument
    console.log(err)
})
    .then(() => {
        console.log("No matter i will be called")
    })



//different way 
Promisee.then(fullfilled, rejected).then(() => {
    console.log("No matter i will be called")
})




// output based promises questions
//Ques 1 - What is the output?
//hint-js always complete synchronus operation first & then asynchronous

function handlePromise() {
    console.log('start');
    const promise1 = new Promise((resolve, reject) => {
        console.log(1);//imp
        resolve(2);
        console.log(3);
    })
    promise1.then((res) => {
        console.log(res);
    })
    console.log('end');
}
handlePromise();


//Ques 2 - What is the output?

console.log('start');

const fn = () => {
    new Promise((resolve, reject) => {
        console.log(1);
        resolve("success");
    });
}

console.log("middle");

fn().then((res) => {
    console.log(res);
})

console.log("end");


//Ques 3 - What is the output based on Promise chaining?

function job() {
    return new Promise((resolve, reject) => {
        reject();
    })
}

let promise = job();

promise
    .then(function () {
        console.log("success 1");
    })
    .then(() => {
        console.log("success 2");
    })
    .then(function () {
        console.log("success 3");
    })
    .catch(function () {
        console.log("Error 1");
    })
    .then(() => {
        console.log("success 4")
    })


//Ques 4 - What is the output based on Promise chaining?

function foo(state) {
    return new Promise((resolve, reject) => {
        if (state) {
            resolve("sucess");
        }
        else {
            reject("error");
        }
    });
}
let poo = foo(true);
poo
    .then((data) => {
        console.log(data);
        return foo(false);
    })
    .catch((error) => {
        console.log(error);
        return "caught error"
    })
    .then((data) => {
        console.log(data);
        return foo(true);
    })
    .catch((error) => {
        console.log(error);
    });

// output
// success
// error
// caught error

//Ques 5 - What is the output based on Promise chaining?

function boo(state) {
    return new Promise((resolve, reject) => {
        if (state) {
            resolve("sucess");
        }
        else {
            reject("error");
        }
    });
}

let loo = boo(true);

loo
    .then((data) => {
        console.log(data);
        return boo(true);
    })
    .then(function (data) {
        if (data !== "victory") {
            throw "defeat";
        }
        return boo(true);
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
        return boo(false);

    })
    .then(function (data) {
        console.log(data);
        return boo(true);
    })
    .catch(function (error) {
        console.log(error);
        return "Error Caught";
    })
    .then(function (data) {
        console.log(data);
        return new Error("test");
    })
    .then(function (data) {
        console.log("success:", data.message);
    })
    .catch(function (data) {
        console.log("error", data.message)
    });


// output
// sucess
// defeat
// error
// Error Caught
// success: test


//Ques 6 - Promise chaining?
const firstPrmoise = new Promise((resolve, reject) => {
    resolve("First");
})

const secondPromise = new Promise((resolve, reject) => {
    resolve(firstPrmoise);
})

secondPromise.then((res) => {
    return res;
})
    .then((res) => {
        console.log(res)
    })

//Ques 7 - Write using Aync Await

// Use async/await to handle the asynchronous call

// function loadJson(url) {
//     return fetch(url).then((response) => {
//         if (response.status == 200) {
//             return response.json();
//         } else {
//             throw new Error(`HTTP error: ${response.status}`);
//         }
//     });
// }

function loadJson(url) {
    try {

        const data = fetch(url);
        if (data.status == 200) {
            return data.json();
        } else {
            throw new Error(`HTTP error: ${response.status}`);
        }
    }
    catch (err) {
        console.log(err);
    }


}

loadJson('https://jsonplaceholder.typicode.com/todos/1').catch((err) => {
    console.log(err)
});



//Ques 8 - Solve Promise Recursively

function promRecurse(fucnPromimse) {
    if (fucnPromimse.lenght == 0) return 0;
    const currPromise = fucnPromimse.shift();
    currPromise.then((res) => console.log(res))
        .catch((err) => console.log(err));
    promRecurse(fucnPromimse);
}

promRecurse([p1, p2, p3]);




