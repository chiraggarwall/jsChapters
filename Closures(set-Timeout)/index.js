
// setTimeout --js not wait for none .As settimout comes in code ,js gives that piece of code to the timer and moves on
// var is fucntional scope
//use let instead as it is block scope

 //in below code we learn 

//1.how settimeout uses clousers.
//2. different ways to invoke callback function(multiple times)  in settimeout using let,var,iife
//3.role of fucntional scope & block scope.







function x(){
    for(var i=1;i<=5;i++){
        setTimeout(function (){
            console.log(i)
        }, i*1000);
    }
}
x();





// due to block scope and not having lexical environment.
// function x(){ 
//     for(let i=0;i<=5;i++){
//         setTimeout(function (){
//             console.log(i);
//         },i*1000);
//     }
// }
// x();






// due to functional scope and having lexical environment
// function x(){
//     for(var i=1;i<=5;i++){
//         function y(i){

//             setTimeout(function (){
//                 console.log(i);
//             }, i*1000);
//         }

//         y(i);
        
//     }
// }

// x();






//function along with refernce to their lexical environment, come into play when fucntion is invoked outside of its parent scope


//case 1 : i points to var=6 
//case 2 : each settimeout has their own i reference as i is let
//case 3 : each settimeout has their own i due to functional scope of var and shadow scoping






