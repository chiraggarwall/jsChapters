document.querySelector(".Grand-Parent").addEventListener("click", (e) => {
  console.log("Grand-Parent Clicked !");
  e.stopPropagation();
},true);//capturing

document.querySelector(".Parent").addEventListener("click", () => {
  console.log("Parent Clicked !");
},false);//bubbling 

document.querySelector(".Child").addEventListener("click", () => {
  console.log("Child Clicked !");
},true);//capturing
