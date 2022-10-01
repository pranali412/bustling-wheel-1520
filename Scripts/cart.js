 import {navbar,fotter} from "../Components/nav.js";

  document.getElementById("navbar").innerHTML = navbar();
  document.getElementById("footer").innerHTML = fotter();

 
let array = JSON.parse(localStorage.getItem("CartList")) || [];
console.log(array);


