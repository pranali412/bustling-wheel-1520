  let data = JSON.parse(localStorage.getItem('products'));
  appenData(data);

function appenData(data){
    let container = document.getElementById('container');
    container.innerHTML = null;

    data.forEach(({image_link, price}) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'child');

        let img = document.createElement('img');
        img.src = image_link;
        let desc = document.createElement('p');
        desc.innerHTML = 'Ace Of Face Foundation Stick - 40 Breve (Medium Beige, Warm Undertone)';
        let prc = document.createElement('h2');
        prc.innerHTML =  `$${price}`;
        let btn = document.createElement('button');
        btn.innerHTML = 'Add To Cart';
        btn.addEventListener('click', function(){
            selectProduct({image_link, price});
        });
        div.append(img, desc, prc, btn);
        container.append(div);
    })

};

arr = JSON.parse(localStorage.getItem('CartList')) || [];
function selectProduct({image_link, price}){
    arr.push({image_link, price});
    localStorage.setItem('CartList', JSON.stringify(arr));
}

const display = () => {
    let option = document.querySelector('#options');
    if(option.style.display == 'block'){
        option.style.display = 'none';
    } else{
        option.style.display = "block";
    };
}

const relevence = () => {
    appenData(data);
};

const lowtohigh = () => {
    data = data.sort((a, b) => {
        return a.price - b.price;
      });
      appenData(data);
}

const hightolow = () => {
    data = data.sort((a, b) => {
      return b.rating - a.rating;
    });
    appenData(data);
  }
