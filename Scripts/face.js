window.addEventListener('load', () =>{
    showData()
 })

 //jquery for toggle sub_menu
 $(document).ready(function(){
    $('.filter_btn').click(function(){
        // console.log("hello")
        $(this).next('.data_box').slideToggle();
        $(this).find('.dropdown2').toggleClass('rotate');
    });
})

    //jquery for toggle sub_menu
    $(document).ready(function(){
        $('.sort-btn').click(function(){
            // console.log("hello")
            $(this).next('.sort_menu').slideToggle();
            $(this).find('.dropdown1').toggleClass('rotate');
        });
    })



    //show data on page 
    let showData = async () =>{
        try{
            let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=foundation')

              let data = await res.json()
              console.log("data:",data)

              display_data(data)

        }
        catch(err){
            console.log("err:",err)
        }
    }
  showData()
    let display_data = (data) => {
         data_id.innerHTML=null;

         data.forEach( ( {image_link, name,price, rating }) => {
            let div = document.createElement('div')

            let image = document.createElement('img')
            image.src = image_link;

            let na = document.createElement('p')
            na.innerText=name;

            let pr = document.createElement('p')
            pr.innerText=`₹ ${price}`;

            let rate = document.createElement('p')
            rate.innerText=`★ ${rating}`;

           
            let order = document.createElement('button')
            order.innerText="ADD TO CART";

            div.append(image,name,pr,rate,order);
            data_id.append(div);
         });
    }

     //sorting
     let sortHL = document.getElementById('sortHL')
     sortHL.addEventListener('click', function (){
         sort1()
         console.log("hi")
     })
 
 
     //High to low
     let sort1 = async () => {
          let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=foundation')
          
          let new_data = await res.json()
          let actual_data = new_data.sort( function (a,b){
             return b.price-a.price;
          })
          display_data(actual_data);
         }
         
         let sortLH = document.getElementById('sortLH')
         sortLH.addEventListener('click', function (){
             sort2()
             console.log("hello")
         })
     //Low to High
     let sort2 = async () => {
         let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=foundation')
         
         let new_data1 = await res.json()
         let actual_data1 = new_data1.sort( function (a,b){
            return a.price-b.price;
         })
         display_data(actual_data1);
        }

      //Relevence
    let relevence = document.getElementById('relevence')
    relevence.addEventListener('click',function (){
        sort3();
        console.log("hellllooooo")
    })   

    //sort for relevence(basically showing the same data that was there at the time of page load)
    let sort3 = async () => {
         let res = await fetch ('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=foundation')
          let data = await res.json()
          console.log(data)
          display_data(data)
        }

         //Filter
       //Product Type

       let Product_1 = document.getElementById('Product_1')
       Product_1.addEventListener('click', function (){
          Product_detail_1();
       })

       let Product_detail_1 = async () => {
        let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_category=Powder')
         let data = await res.json()
        //  console.log(data)
        display_data(data)
       }

       let Product_2 = document.getElementById('Product_2')
       Product_2.addEventListener('click', function (){
          Product_detail_2();
       })

       let Product_detail_2 = async () => {
        let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_category=Cream')
         let data = await res.json()
        //  console.log(data)
        display_data(data)
       }

       let Product_3 = document.getElementById('Product_3')
       Product_3.addEventListener('click', function (){
          Product_detail_3();
       })

       let Product_detail_3 = async () => {
        let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=Eyeliner&product_category=Pencil')
         let data = await res.json()
        //  console.log(data)
        display_data(data)
       }

       let Product_4 = document.getElementById('Product_4')
       Product_4.addEventListener('click', function (){
          Product_detail_4();
       })

       let Product_detail_4 = async () => {
        let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=Eyeliner&product_category=Liquid')
         let data = await res.json()
        //  console.log(data)
        display_data(data)
       }

       let Product_5 = document.getElementById('Product_5')
       Product_5.addEventListener('click', function (){
          Product_detail_5();
       })

       let Product_detail_5 = async () => {
        let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=Nail_polish')
         let data = await res.json()
         console.log(data)
        display_data(data)
       }

//Features
let Feature_1 = document.getElementById('Feature_1')
    Feature_1.addEventListener('click', function (){
        Feature_detail_1();
       })

       let Feature_detail_1 = async () => {
        let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=Blush&product_tags=Vegan')
         let data = await res.json()
         console.log(data)
        display_data(data)
       }

       let Feature_2 = document.getElementById('Feature_2')
    Feature_2.addEventListener('click', function (){
        Feature_detail_2();
       })

       let Feature_detail_2 = async () => {
        let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=Blush&product_tags=Gluten free')
         let data = await res.json()
         console.log(data)
        display_data(data)
       }

       let Feature_3 = document.getElementById('Feature_3')
    Feature_3.addEventListener('click', function (){
        Feature_detail_3();
       })

       let Feature_detail_3 = async () => {
        let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=Eyeliner&product_tags=Canadian')
         let data = await res.json()
         console.log(data)
        display_data(data)
       }

 //Finish

 let Finish_1 = document.getElementById('Finish_1')
 Finish_1.addEventListener('click', function (){
        Finish_detail_1();
       })

       let Finish_detail_1 = async () => {
        let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=Lipstick&product_tags=Natural')
         let data = await res.json()
         console.log(data)
        display_data(data)
       }

       
 let Finish_2 = document.getElementById('Finish_2')
 Finish_2.addEventListener('click', function (){
        Finish_detail_2();
       })

       let Finish_detail_2 = async () => {
        let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=Lipstick&product_tags=Peanut free product')
         let data = await res.json()
         console.log(data)
        display_data(data)
       }

  //Formation
  let Formation_1 = document.getElementById('Formation_1')
  Formation_1.addEventListener('click', function (){
    Formation_detail_1();
       })

       let Formation_detail_1 = async () => {
        let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=Lipstick&product_tags=Canadian')
         let data = await res.json()
         console.log(data)
        display_data(data)
       }
       
       let Formation_2 = document.getElementById('Formation_2')
       Formation_2.addEventListener('click', function (){
         Formation_detail_2();
            })
     
            let Formation_detail_2 = async () => {
             let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=Lipstick&product_tags=Natural')
              let data = await res.json()
              console.log(data)
             display_data(data)
            }

            let Formation_3 = document.getElementById('Formation_3')
       Formation_3.addEventListener('click', function (){
         Formation_detail_3();
            })
     
            let Formation_detail_3 = async () => {
             let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=Lipstick&product_tags=Organic')
              let data = await res.json()
              console.log(data)
             display_data(data)
            }

            //RESET
            let reset = document.getElementById('reset')
            reset.addEventListener('click' , () => {
                reset_fun()
            })

            let reset_fun = async () => {
                try{
                    let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=lipstick')
        
                   let data = await res.json()
                      console.log("data:",data)
            
                      display_data(data)
        
                }
                catch(err){
                    console.log("err:",err)
                }
            }