
window.addEventListener('load', () =>{
   showData()
})

    //jquery for toggle sub_menu
    $(document).ready(function(){
        $('.read1').click(function(){
            // console.log("hello")
            $(this).next('.sort_menu').slideToggle();
            $(this).find('.dropdown1').toggleClass('rotate');
        });
    })

    $(document).ready(function(){
        $('.sort-btn').click(function(){
            // console.log("hello")
            $(this).next('.sort_menu').slideToggle();
            $(this).find('.dropdown1').toggleClass('rotate');
        });
    })


//   let data
    //show data on page 
    let showData = async () =>{
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

    let display_data = (data) => {
         data_id.innerHTML=null;

         data.forEach( ( {image_link, name, price, rating }) => {
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
         let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=lipstick')
         
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
        let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=lipstick')
        
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
        let res = await fetch ('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=lipstick')
         let data = await res.json()
         console.log(data)
         display_data(data)
       }