window.addEventListener('load', () =>{
    showData()
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
            let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=eyeliner')

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
