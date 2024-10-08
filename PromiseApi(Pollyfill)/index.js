//Promise.all take an array of promises & if all of them get success then it will return an array of value from promises.
//But if any of them fails then it will return an error and not wait for other promises to get settle. 

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P1 Fail")
    }, 1000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 Success")
    }, 5000)
});


const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 Success")
    }, 3000)
});


Promise.all([p1, p2, p3]).then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
})



//Promise.allSettled-->sames as Promise.all for success case but in fail case it will wait for all promises to get settled and then return the array of all success.
Promise.allSettled([p1, p2, p3]).then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
})


//Promise.race--> It immediately returns the value when first promise get settled.
Promise.race([p1, p2, p3]).then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err.errors);
})


//Promise.any --> It immediately returns the value when first success get settled & if all were fails then it will return an aggregate error.

// Promise.all Pollyfill

const dummyApI = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}

const tasksArray = [dummyApI(1000), dummyApI(2000), dummyApI(3000)];

Promise.allPolyfill = (promises) => {
    return new Promise((resolve, reject) => {
        let result = []
        if (promises.length == 0) {
            resolve(result);
        }
        promises.forEach((element, index) => {
            element.then((res) => {
                result[index] = res;
                if (index === tasksArray.length - 1) resolve(output)
            }).catch((err) => { reject(err); })

        });

    })
}


Promise.allPolyfill(tasksArray).then((data) => {
    console.log(data)
}).catch(err => {
    console.log(err);
})