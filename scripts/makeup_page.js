

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




const products=async()=>{
    try{
console.log("hiiiiii");
       const res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&limit=20&page=1`)
          //const res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_category=cream&product_type=foundation`) 
        const data= await res.json();
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

    const img=document.createElement('img')
    img.src=el.image_link
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
        addtocart();
    })


    div.append(img,Name,Price,Rating,btn)
    right_side.append(div)
    })
}






