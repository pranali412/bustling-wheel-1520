

// let q=document.querySelector(".sub-btn")
// q.onclick = function(){
//     console.log("hiiii");
//         //  this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
// }




 //jquery for toggle sub_menu
 $(document).ready(function(){
    $('.sub-btn').click(function(){
        console.log("hiii")
        $(this).next('.sub_menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
})


let data;

const products=async()=>{
    try{
//console.log("hiiiiii");
       const res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&limit=20&page=1`)
          //const res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_category=cream&product_type=foundation`) 
         data= await res.json();
     // console.log("data:",data);
      append(data)
    }catch(err){
        console.log("Error:",err);
    }
}

products();

function append(data){
    const right_side=document.getElementById('right_side');
    right_side.innerHTML=null;

    data.forEach((el)=>{
    const div=document.createElement("div");
    div.setAttribute("id","p-div");

    const div2=document.createElement("div");
    div2.setAttribute("class","star-main-div");

    const div3=document.createElement("div");
    div3.setAttribute("class","star-div");
    div3.innerHTML = '<i class="fa-regular fa-heart 2fa"></i>';

    const img=document.createElement('img')
    img.src=el.image_link;

    const Name=document.createElement("p");
    Name.innerText=el.name;
    
    const Price=document.createElement("h4");
    Price.innerText=" ₹ "+ Math.floor(el.price*80);

    const Rating=document.createElement("h4");
    Rating.style.color="#757575";
    if(el.rating==null){
        Rating.innerText=" ★ " + "0.0";
    }
    else{
        Rating.innerText=" ★ " + el.rating;
    }

    const btn=document.createElement("button")
    btn.setAttribute("class","div-button");
    btn.innerHTML="Add To Cart";
    btn.addEventListener("click",()=>{
        addtocart(el);
    });


    div2.append(div3,btn);
    div.append(img,Name,Price,Rating,div2);
    right_side.append(div);
    })
}

let cartdata=JSON.parse(localStorage.getItem("CartList")) || [];
function addtocart(el){
    cartdata.push(el);
    localStorage.setItem("CartList",JSON.stringify(cartdata));
}


//sort Relevance  
let relevance_p=document.getElementById('sub-item1');
relevance_p.addEventListener("click", ()=>{
    starting();
});
const starting=async()=>{
   const res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&limit=20&page=1`);
    data = await res.json();
    append(data);
  }
  


    //sort high to low
    let hightolow_p=document.getElementById('sub-item2');
    hightolow_p.addEventListener("click", ()=>{
        hlrating(data);
    });
    const hlrating=(data)=>{
     let sortdata= data.sort(function(a,b){
        // console.log(typeof (b.price));
         return b.price - a.price
       });
     append(sortdata);
   }


   

  //sort low to high
  let lowtohigh_p=document.getElementById('sub-item3');
  lowtohigh_p.addEventListener("click", ()=>{
    lhrating(data)
});
  const lhrating=(data)=>{
    let sortdata= data.sort(function(a,b){
        return a.price - b.price ;
      });
    append(sortdata);
  }
  

//------------------------------------------


const product_1 = document.getElementById('Filter-type1');
product_1.addEventListener('click', function (){
   Product_1();
});
const Product_1 = async () => {
  //console.log("hiiiii");
 let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&limit=20&page=1&product_type=eyeliner')
  let data = await res.json();
   //console.log(data);
 append(data);
}

const product_2 = document.getElementById('Filter-type2');
product_2.addEventListener('click', function (){
   Product_2();
});
const Product_2 = async () => {
  //console.log("hiiiii");
 let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=lipstick')
  let data = await res.json();
   //console.log(data);
 append(data);
}


const product_3 = document.getElementById('Filter-type3');
product_3.addEventListener('click', function (){
   Product_3();
});
const Product_3 = async () => {
 let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=nail_polish')
  let data = await res.json();
   //console.log(data);
 append(data);
}


const product_4 = document.getElementById('Filter-type4');
product_4.addEventListener('click', function (){
   Product_4();
});
const Product_4 = async () => {
 let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=mascara');
  let data = await res.json();
   //console.log(data);
 append(data);
}


//https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_category=liquid&product_type=lipstick
const product_5 = document.getElementById('Filter-type5');
product_5.addEventListener('click', function (){
   Product_5();
});
const Product_5 = async () => {
 let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner');
  let data = await res.json();
   //console.log(data);
 append(data);
}


//------------------------------------------

const feature_1 = document.getElementById('Filter-feature1');
feature_1.addEventListener('click', function (){
   Feature_1();
});
const Feature_1 = async () => {
 let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=eyeshadow');
  let data = await res.json();
   //console.log(data);
 append(data);
}


const feature_2 = document.getElementById('Filter-feature2');
feature_2.addEventListener('click', function (){
   Feature_2();
});
const Feature_2 = async () => {
 let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=cream&product_type=foundation');
  let data = await res.json();
   //console.log(data);
 append(data);
}


const feature_3 = document.getElementById('Filter-feature3');
feature_3.addEventListener('click', function (){
   Feature_3();
});
const Feature_3 = async () => {
 let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Gluten+Free&product_type=mascara');
  let data = await res.json();
   //console.log(data);
 append(data);
}


const feature_4 = document.getElementById('Filter-feature4');
feature_4.addEventListener('click', function (){
   Feature_4();
});
const Feature_4 = async () => {
 let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=eyeliner');
  let data = await res.json();
   //console.log(data);
 append(data);
}
//https://makeup-api.herokuapp.com/api/v1/products.json?product_category=powder&product_type=foundation

const feature_5 = document.getElementById('Filter-feature5');
feature_5.addEventListener('click', function (){
   Feature_5();
});
const Feature_5 = async () => {
 let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=liquid&product_type=lipstick');
  let data = await res.json();
   //console.log(data);
 append(data);
}

//------------------------------------------

const finish_1 = document.getElementById('Filter-finish1');
finish_1.addEventListener('click', function (){
Finish_1();
});
const Finish_1 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=blush');
 let data = await res.json();
  //console.log(data);
append(data);
}

const finish_2 = document.getElementById('Filter-finish2');
finish_2.addEventListener('click', function (){
Finish_2();
});
const Finish_2 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=cream&product_type=blush');
 let data = await res.json();
  //console.log(data);
append(data);
}

const finish_3 = document.getElementById('Filter-finish3');
finish_3.addEventListener('click', function (){
Finish_3();
});
const Finish_3 = async () => {
let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=Blush&product_tags=Gluten free');
 let data = await res.json();
  //console.log(data);
append(data);
}

const finish_4 = document.getElementById('Filter-finish4');
finish_4.addEventListener('click', function (){
Finish_4();
});
const Finish_4 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=bb_cc&product_type=foundation');
 let data = await res.json();
  //console.log(data);
append(data);
}

const finish_5 = document.getElementById('Filter-finish5');
finish_5.addEventListener('click', function (){
Finish_5();
});
const Finish_5 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Canadian&product_type=bronzer');
 let data = await res.json();
  //console.log(data);
append(data);
}

//------------------------------------------

const formulation_1 = document.getElementById('Filter-formu1');
formulation_1.addEventListener('click', function (){
Formulation_1();
});
const Formulation_1 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=powder&product_type=foundation');
 let data = await res.json();
  //console.log(data);
append(data);
}


const formulation_2 = document.getElementById('Filter-formu2');
formulation_2.addEventListener('click', function (){
Formulation_2();
});
const Formulation_2 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lip_gloss&product_type=lipstick');
 let data = await res.json();
  //console.log(data);
append(data);
}

const formulation_3 = document.getElementById('Filter-formu3');
formulation_3.addEventListener('click', function (){
Formulation_3();
});
const Formulation_3 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=lipstick');
 let data = await res.json();
  //console.log(data);
append(data);
}

const formulation_4 = document.getElementById('Filter-formu4');
formulation_4.addEventListener('click', function (){
Formulation_4();
});
const Formulation_4 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=mineral&product_type=foundation');
 let data = await res.json();
  //console.log(data);
append(data);
}

const formulation_5 = document.getElementById('Filter-formu5');
formulation_5.addEventListener('click', function (){
Formulation_5();
});
const Formulation_5 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=gel&product_type=eyeliner');
 let data = await res.json();
  //console.log(data);
append(data);
}


//------------------------------------------


const converc_1 = document.getElementById('Filter-converc1');
converc_1.addEventListener('click', function (){
Converc_1();
});
const Converc_1 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=pencil&product_type=eyeliner');
 let data = await res.json();
  //console.log(data);
append(data);
}


const converc_2 = document.getElementById('Filter-converc2');
converc_2.addEventListener('click', function (){
Converc_2();
});
const Converc_2 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow');
 let data = await res.json();
 // console.log(data);
append(data);
}

const converc_3 = document.getElementById('Filter-converc3');
converc_3.addEventListener('click', function (){
 Converc_3();
});
const Converc_3 = async () => {
 let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=highlighter&product_type=foundation');
  let data = await res.json();
   //console.log(data);
 append(data);
}




