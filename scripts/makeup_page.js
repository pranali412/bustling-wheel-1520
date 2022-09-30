

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
console.log("hiiiiii");
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
  




