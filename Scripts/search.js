function lsData(){
    let data = JSON.parse(localStorage.getItem('products'));
    // console.log(data);
    appenData(data);
}
lsData();

function appenData(data){
    let container = document.getElementById('container');
    container.innerHTML = null;

    data.forEach(({image_link, description, price}) => {
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
            selectProduct({image_link, descrition, price});
        });
        div.append(img, desc, prc, btn);
        container.append(div);
    })

};



let arr = JSON.parse(localStorage.getItem('selected')) || [];
const selectProduct = ({image_link, descrition, price}) => {
    arr.push({image_link, descrition, price});
    localStorage.setItem('selected', JSON.stringify(arr));
}
