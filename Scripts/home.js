function slideShow(){
    const arr=['https://d32baadbbpueqt.cloudfront.net/Homepage/259790f5-3c09-43f3-8dde-49c3de49f0c4.jpg',
'https://d32baadbbpueqt.cloudfront.net/Homepage/259790f5-3c09-43f3-8dde-49c3de49f0c4.jpg',
'https://d32baadbbpueqt.cloudfront.net/Homepage/91374506-cc05-46f3-aff6-86a00e501c38.gif',
'https://d32baadbbpueqt.cloudfront.net/Homepage/2d934fad-8c2a-4f7d-85fc-ea1ed8f23673.jpg',
'https://d32baadbbpueqt.cloudfront.net/Homepage/87591a7c-d8f8-499c-9562-c89000ef7e4a.jpg',
'https://d32baadbbpueqt.cloudfront.net/Homepage/1fa29c9d-b7b6-4aa9-ac54-a2195c10fc63.jpg',
'https://d32baadbbpueqt.cloudfront.net/Homepage/1fa29c9d-b7b6-4aa9-ac54-a2195c10fc63.jpg',
'https://d32baadbbpueqt.cloudfront.net/Homepage/32e53a7b-879e-4c34-a5bc-b95c85ee4a9e.jpg',
'https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg']

    let i=0;
    let div=document.getElementById('carousel')

    let img=document.createElement('img');
    img.src=arr[0];

    div.append(img);
    i=i+1;
    
    setInterval(function(){

        if(i==9){
            i=0;
        }
        img.src=arr[i];
        i=i+1;

        div.append(img);

    }, 2000);
}

slideShow();

function slideShow2(){
    const arr=['https://d32baadbbpueqt.cloudfront.net/Homepage/a1ea3283-9593-4f1c-8e6b-70c3a5062c37.jpg',
'https://d32baadbbpueqt.cloudfront.net/Homepage/37471559-27d1-4509-9e31-29d889be7036.jpg',
'https://d32baadbbpueqt.cloudfront.net/Homepage/f190c764-84cf-4eea-a381-8b701be65852.gif',
'https://d32baadbbpueqt.cloudfront.net/Homepage/89e51326-1363-44e1-94f1-d5bd00bd2ca9.gif',
'https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg',
'https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg']

    let i=0;
    let div=document.getElementById('carousel2')
    
    let img=document.createElement('img');
    img.src=arr[0];

    div.append(img);
    i=i+1;
    
    setInterval(function(){

        if(i==6){
            i=0;
        }
        img.src=arr[i];
        i=i+1;

        div.append(img);

    }, 3000);
}

slideShow2();

function slideShow3(){
    const arr=[
'https://d32baadbbpueqt.cloudfront.net/Homepage/7fcf7da7-9d0b-4e1a-b09e-e075825bc9ad.jpg',
'https://d32baadbbpueqt.cloudfront.net/Homepage/05b6a9d3-2d45-4381-80f2-2b3fdd2c56f0.jpg',
'https://d32baadbbpueqt.cloudfront.net/Homepage/67885afc-5ba2-4f1d-a6dd-7012bf5b7b90.jpg'
]

let i=0;
let div=document.getElementById('carousel3')

let img=document.createElement('img');
img.src=arr[0];

div.append(img);
i=i+1;

setInterval(function(){

    if(i==3){
        i=0;
    }
    img.src=arr[i];
    i=i+1;

    div.append(img);

}, 2000);
}

slideShow3();


//seller

let bestSellersLeftArr = [
    {
        img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644", 
        name : "Ace OF Face Foundation Stick", 
        price: "999",
       
        text : "ADD TO CART",
    },
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/WBG1_09f0cf83-792a-4185-8882-5e5e6909a459.jpg?v=1657814596",
    name : "Smudge Me Not Mini Liquid Lipstic Set-Power Up You", price: "799",text : "SELECT SHADE",},
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/424092031-1.jpg?v=1661529396",
     name : "Wingman Waterproof Microliner-01 || Be Black", price: "449",text : "SELECT SHADE",},
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg?v=1645608270", name : "Matte Attack Transferroof Lipstick", price: "699",text : "SELECT SHADE",},
   
]

let pro_div = document.querySelector(".best_seller_products")
let bestSeller = (bestSellersLeftArr,container)=>{
    container.innerText = ""
    bestSellersLeftArr.forEach((el)=>{
        // console.log(el)
        
        let div = document.createElement("div")
        div.className = "four_pro_div"

        let bsimg = document.createElement("img")
        bsimg.src = el.img_url
        bsimg.style.height = "250px"
        bsimg.style.width = "100%"

        let bsname = document.createElement("div")
        bsname.className = "pro_name"
        bsname.innerText = el.name

        
        let pdiv = document.createElement("div")
        pdiv.className = "pdiv"         
        let bsprice = document.createElement("p")
        bsprice.innerText = `₹ ${el.price}`
        pdiv.append(bsprice)

        let bstag = document.createElement("div")
        bstag.className = "text_tag"
        bstag.innerText = el.text

        let img_name_price_div = document.createElement("div")
        img_name_price_div.className = "img_name_price_div"

        img_name_price_div.append(bsimg,bsname,pdiv,)
        div.append(img_name_price_div,bstag)
        // console.log(div)
        container.append(div)
    })
   
}



bestSeller(bestSellersLeftArr,pro_div)
let flag1= true;


document.querySelector(".left_arr_div").addEventListener("click",()=>{

    flag1=!flag1
    if(flag1){
        bestSeller(bestSellersLeftArr,pro_div)
    }else{
        bestSeller(bestSellersRightArr,pro_div)
    }
    
})
let flag2 = false
document.querySelector(".right_arr_div").addEventListener("click",()=>{
    flag2 = !flag2
    if(flag2){
        bestSeller(bestSellersRightArr,pro_div)
    }else{
        bestSeller(bestSellersLeftArr,pro_div)
    }
    
})


//justin 



let giftSetsArr = [
    [    {
        img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/Gift-card-01.jpg?v=1651576748",
        name : "MOTHERS DAY GIFT CARD", 
        price: "500",
        text : "SELECT VALUE",
        stoffPrice : "", 
        disPer:"",
        rupee : "",
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-lipstick-minis-set-28270316945491.jpg?v=1621586014",
        name : "MATTE AS HELL CRAYON LIPSTICK MINIS SET", 
        price: "1099",
        text : "SHOP NOW",
        stoffPrice : "1799", 
        disPer:"(38% Off)",
        rupee : "₹",
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966",
        name : "SMUDGE ME NOT LIQUID LIPSRICK MINIS SET", 
        price: "799",
        text : "CHOOSE PRODUCTS",
        stoffPrice : "999", 
        disPer:"(20% Off)",
        rupee : "₹",
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1.jpg?v=1646298577",
        name : "FACE PALLET + MINI LIQUID LIPSTICK VALUE SET", 
        price: "849",
        text : "CHOOSE PRODUCTS",
        stoffPrice : "1048", 
        disPer:"(18% Off)",
        rupee : "₹",
    },],
    [    {
        img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966",
        name : "SMUDGE ME NOT LIQUID LIPSRICK MINIS SET", 
        price: "799",
        text : "CHOOSE PRODUCTS",
        stoffPrice : "999", 
        disPer:"(20% Off)",
        rupee : "₹",
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1.jpg?v=1646298577",
        name : "FACE PALLET + MINI LIQUID LIPSTICK VALUE SET", 
        price: "849",
        text : "CHOOSE PRODUCTS",
        stoffPrice : "1048", 
        disPer:"(18% Off)",
        rupee : "₹",
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_0ca61ef7-05ce-49be-9fa1-de7c41b99a1f.jpg?v=1649260645",
        name : "ANNIVERSARY KIT", 
        price: "1999",
        text : "CHOOSE PRODUCTS",
        stoffPrice : "2793", 
        disPer:"(28% Off)",
        rupee : "₹",
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/Hi-5-KIT-WBG-Images1_43e43755-262f-4b35-973a-6e5fad7222a4.jpg?v=1643125074",
        name : "HI-5 KIT", 
        price: "999",
        text : "CHOOSE PRODUCTS",
        stoffPrice : "1295", 
        disPer:"(22% Off)",
        rupee : "₹",
    },],
]

 //  Gift sets part


 let giftSetsdiv = document.querySelector(".eleventh_box_slide_div")
 superSavers(giftSetsArr[0],giftSetsdiv)
 let gsleft = 0
 let gsright = 0
  document.querySelector(".gsleft_arr_div").addEventListener("click",()=>{
      
      gsleft--
      if(gsleft>=0){
          gsright--
          superSavers(giftSetsArr[gsleft],giftSetsdiv)           
      }else{
          gsleft = 1
          gsright = 1
          superSavers(giftSetsArr[1],giftSetsdiv)
      }
      
  })

  document.querySelector(".gsright_arr_div").addEventListener("click",()=>{
     gsright++
     if(gsright<2){
         gsleft++
      superSavers(giftSetsArr[gsright],giftSetsdiv)
     }else{
         gsleft = 0
          gsright = 0
         superSavers(giftSetsArr[0],giftSetsdiv)
     }
  })
