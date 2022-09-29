function move(e,p,c,n){
    var length = document.getElementById(c).value.length
    var maxlength = document.getElementById(c).getAttribute("maxlength")
    if(length==maxlength){
        if(n!==''){
            document.getElementById(n).focus();
        }
    }
    if(e.key=="Backspace"){
        if(p!==''){
            document.getElementById(p).focus();
        }
    }
    }
    function OTP(){
        let randomOtp = Math.random();
    randomOtp = Math.floor(randomOtp * 10000);
    alert("OTP :-"+ `${randomOtp}`);
    
    let reotp= localStorage.setItem("One Time Password : `{randomOtp}`")
    console.log(reotp);
    
    }
        
    function Verify(){
        alert("Verify OTP")
    }