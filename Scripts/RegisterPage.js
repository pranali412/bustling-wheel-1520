function succeful (){
       MainRegisterPage.style.display="none"
       container.style.display="block"
       if("userfirstname.length>5"){ 
    
         alert("  congratulation Account Created successful")
         window.location.href="./index.html";
       }
     }
    
    function closed (){
        MainRegisterPage.style.display="none"
        MainRegisterPage.style.transform="translateX(710px)";   
        MainRegisterPage.style.transition="2s";  
    }
    
    function seterror(id, error){
        element = document.getElementById(id)
        element.getElementsByClassName("formerror")[0].innerHTML=error;
    }
    
    function validateform(){
        var returnval =true;
        var name = document.form["myForm"]["First-Name"].value;
        if(name.length<8){
            seterror("name","length is too sort")
        }
        return returnval;
    }