function showlist() {
    let hamicon = document.querySelector('#ham-nav');
    if(hamicon.style.display == 'block'){
        hamicon.style.display = 'none';
    } else{
        hamicon.style.display = "block";
    }
}

const cancel = () => {
    let hamicon = document.querySelector('#ham-nav');
    if(hamicon.style.display == 'block'){
        hamicon.style.display = 'none';
    };
};

const fetchAPI = async() => {
    let query = document.getElementById('query').value;

    try {
        let res = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${query}`);
        let data = await res.json()
        console.log('data',data);
        localStorage.setItem('products', JSON.stringify(data));
        window.location.href = './search.html';
    } catch (error) {
        console.log('Error:', error);
    }
}