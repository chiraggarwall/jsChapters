function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

delay(2000).then(() => {
    console.log("This message is shown after 2 seconds");
});


async function getData() {
    return data;//wraps up data inside the Promise
}

const promise = new Promise((resolve, reject) => {
    resolve("Hi Resolved")
});

async function handlePromise() {
    const val = await promise;
    console.log(val);
}


//next example
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello");
    }, 5000)
})

//first case using then to consume promise

function getInfo() {
    p.then((res) => {
        console.log(res);
    })
    console.log("Nameste JavaScript")
}
getInfo();
//In this case function does not wait for the promise to resolve and prints "Nameste JavaScript".
//In this case js engine takes operation as asynchronus.


//second case using async await to consume promise
async function handlePromise() {
    try {
        const val = await p;
        console.log(val);
        console.log("Nameste JavaScript");
    }
    catch (err) {
        console.log(err);
    }

}

//In this case js engine not wait for promise to resolve.
//In this case js engine take function as asynchronous.---important to understand
//Its execution will get suspended when await encounters & now it will wait till promise is resolved which makes the callsatck free & it will continue once promise get resolved.
//