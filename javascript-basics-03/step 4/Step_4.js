document.addEventListener('DOMContentLoaded', init);
function init(){
    var pass1=document.querySelector("#password");
    var pass2=document.querySelector("#confirmation");
    var btn=document.querySelector("button");
    btn.onclick = () => {
        if(pass1.value!=pass2.value){
            pass1.style.borderColor="red";
            pass2.style.borderColor="red";
        }
        else if(pass1.value==pass2.value){
            pass1.style.borderColor="unset";
            pass2.style.borderColor="unset";
        }
    };
}