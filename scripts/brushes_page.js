

let obj_data=[
    {
        image:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-001Blush.jpg?v=1627659984",
        name: "Blend Trend Face Brush - 001 Blush",
        price: 399.00,
        rating: 4.9 ,
        items: "(15)",
        product:"Face Brush",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFoundationBrush-052Kabuki.jpg?v=1627573664",
        name: "Blend Trend Foundation Brush - 052 Kabuki",
        price: 499.00,
        rating: 4.8 ,
        items: "(26)",
        product:"Foundation Brush",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",
        name: "Blend Trend Face Brush - 006 Highlighter",
        price: 399.00,
        rating: 4.7 ,
        items: "(23)",
        product:"Face Brush",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-13.jpg?v=1627659977",
        name: "Blend Trend Dual Eyeshadow Brush - 413 Flat + Round Xl",
        price: 599.00,
        rating: 5,
        items:"(2)",
        product:"Eyeshadow Brush",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-2-min.jpg?v=1627573652",
        name: "Blend Trend Eyeshadow Brush - 041 Flat",
        price: 399.00,
        rating: 5,
        items:"(3)",
        product:"Eyeshadow Brush",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
        name: "Blend Trend Dual Eyeshadow Brush - 412 Flat + Round",
        price: 599.00,
        rating: 5,
        items:"(2)",
        product:"Eyeshadow Brush",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-12-min.jpg?v=1627573647",
        name: "Blend Trend Dual Face Brush - 075 Powder + Foundation",
        price: 599.00,
        rating: 4.8 ,
        items: "(42)",
        product:"Face Brush",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-3-min.jpg?v=1627573657",
        name: "Blend Trend Eyeshadow Brush - 042 Round",
        price: 399.00,
        rating: 4.4  ,
        items:"(5)",
        product:"Eyeshadow Brush",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-14_1.jpg?v=1627659982",
        name: "Blend Trend Eyeshadow Brush - 043 Round Xl",
        price: 399.00,
        rating: 4.8,
        items:"(6)",
        product:"Eyeshadow Brush",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",
        name: "Blend Trend Face Brush - 003 Contour",
        price: 399.00,
        rating: 4.5,
        items:"(13)",
        product:"Face Brush",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-007Powder.jpg?v=1627660008",
        name: "Blend Trend Face Brush - 007 Powder",
        price: 399.00,
        rating: 4.9,
        items:"(24)",
        product:"Face Brush",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/BeginnersEssentialsCombo3-WBGimages.jpg?v=1630683820",
        name: "Face Essentials Combo",
        price: 1499.00,
        rating: 5,
        items:"(1)",
        product:"Face Essentials",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_1.jpg?v=1630683833",
        name: "EYES & FACE Combo",
        price: 649.00,
        rating: 4.5 ,
        items:"(6)",
        product:"EYES & FACE Combo",
    },

];

let s_data=obj_data;
// console.log("s_data:",s_data);


 //jquery for toggle sub_menu
 $(document).ready(function(){
    $('.sub-btn').click(function(){
        // console.log("hiii")
        $(this).next('.sub_menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
})




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
    img.src=el.image;

    const Name=document.createElement("p");
    Name.innerText=el.name;
    
    const Price=document.createElement("h4");
    Price.innerText=" ₹ "+el.price;

    const Rating=document.createElement("h4");
    Rating.style.color="#757575";
    if(el.rating==null){
        Rating.innerText=" ★ " + "0.0";
    }
    else{
        Rating.innerText=" ★ "+el.rating;
    }

    const btn=document.createElement("button")
    btn.innerHTML="Add To Cart";
    btn.addEventListener("click",()=>{
        addtocart(el); 
    })


     div2.append(div3,btn);
    div.append(img,Name,Price,Rating,div2);
    right_side.append(div);
    })
}

append(obj_data);

let cartdata=JSON.parse(localStorage.getItem("CartList")) || [];
function addtocart(el){
    cartdata.push(el);
    localStorage.setItem("CartList",JSON.stringify(cartdata));
}

//Relevance data 
let relevance_p=document.getElementById('sub-item1');
relevance_p.addEventListener("click", ()=>{
    starting();
});
const starting=async()=>{
    // console.log("starting");
    append(s_data);
    // console.log(s_data);
  }
  


    //sort high to low
    let hightolow_p=document.getElementById('sub-item2');
    hightolow_p.addEventListener("click", ()=>{
        hlrating();
    });
    const hlrating=()=>{
        // console.log("HL");
     let sortdata= obj_data.sort(function(a,b){
         return b.price - a.price;
       });
     append(sortdata);
   }


  //sort low to high
  let lowtohigh_p=document.getElementById('sub-item3');
  lowtohigh_p.addEventListener("click", ()=>{
    lhrating()
});
  const lhrating=()=>{
    // console.log("LH");
    let sortdata = obj_data.sort(function(a,b){
        return a.price - b.price ;
      });
    append(sortdata);
  }
  


