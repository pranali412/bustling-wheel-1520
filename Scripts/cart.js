

arr = JSON.parse(localStorage.getItem('CartList')) || [];
let container = document.getElementById('display');
container.innerHTML = null;

let totalPrice=0;
let subTotal = 0;



appenData(arr);
function appenData(arr){
    arr.forEach((el, i)=>{

        let cartOrder_cartData = document.querySelector('.cartOrder_cartData');
        cartOrder_cartData.innerHTML = null;
        let Total = document.querySelector("#totalPrice");
        Total.innerHTML= null;
        let initPrice = 0
        for (let i = 0; i < arr.length; i++) {
            let obj = arr[i];
            initPrice+=Number(obj.price);
            Total.innerHTML =  initPrice;
        }
        console.log(initPrice);

        
        let div = document.createElement('div');
        div.setAttribute('class', 'child');

        let img = document.createElement('img');
        img.src = el.image_link;
        let desc = document.createElement('p');
        desc.innerHTML = 'Ace Of Face Foundation Stick - 40 Breve (Medium Beige, Warm Undertone)';
        desc.setAttribute('class','child_title')

        let prc = document.createElement('h2');
        prc.innerHTML =  `$${el.price}`;
        prc.setAttribute('class','priceT')

        let btn = document.createElement('button');
        btn.innerHTML = 'Remove';
        btn.setAttribute('class','btn')
        btn.addEventListener('click', function(){
            remove(i);
        });
        div.append(img, desc, prc, btn);
        container.append(div);
    })
}

function remove(i){
        arr.splice(i,1);
        localStorage.setItem('CartList',JSON.stringify(arr));
        window.location.href = './cart.html';
        appenData();
}


function showdata(){
    window.location.href="./Order.html";
}
