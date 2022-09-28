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