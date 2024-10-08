function car(brand){
    this.carname=brand;
}

car.prototype.present=function(){
    return "i have a" + this.carname;
}


function model(brand,mod){

    car.call(this,brand);
    this.model=mod;
}

model.prototype=function(){
    return this.present()+this.model;
}

// Object.setPrototypeOf(model.prototype.__proto,car.prototype);
newObject=Object.create(car.prototype);
model.prototype=newObject;
model.prototype.construtor.model


var ab=new model("hello" ,"safari");
// //4 steps 
// //-- create new object -->> link this newly created object to the prototype (object) -->> this keyword to newly craeted object -->> return this 


ab.present();


// //what is constructor:Blueprint to create instance of an objects
// //what is prototype object:This is an object shared among all instances created by the constructor function. Properties and methods defined on the prototype object are inherited by all instances.
// //what is __proto__ : points to prototype object
// // Object.__proto__===null
// //Object.__prototype===ab.__proto__.__proto__
// console.log(x)//undefined

var x=1;
a();
b();
console.log(x);//1

function a(){
    x=undefined;
    console.log(x);//undefined
    var x=5;
    console.log(x);//5
}

function b(){
    
    console.log(x);//1
    function x(){

    } 
}

