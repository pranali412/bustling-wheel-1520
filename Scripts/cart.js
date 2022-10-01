

arr = JSON.parse(localStorage.getItem('CartList')) || [];
let container = document.getElementById('display');
container.innerHTML = null;

appenData(arr);
function appenData(arr){
    arr.forEach((el, i)=>{
        let div = document.createElement('div');
        div.setAttribute('class', 'child');

        let img = document.createElement('img');
        img.src = el.image_link;
        let desc = document.createElement('p');
        desc.innerHTML = 'Ace Of Face Foundation Stick - 40 Breve (Medium Beige, Warm Undertone)';
        let prc = document.createElement('h2');
        prc.innerHTML =  `$${el.price}`;
        let btn = document.createElement('button');
        btn.innerHTML = 'Remove';
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


