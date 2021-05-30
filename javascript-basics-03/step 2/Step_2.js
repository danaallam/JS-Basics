document.addEventListener('DOMContentLoaded', init);
function init(){
    var p=document.querySelector("p");
    var a1=document.querySelector("#show");
    var a2=document.querySelector("#hide");
    display1(a1);
    display1(a2);
    function display1(a){
        if(a.id==a1.id){
            a.onclick= () => {
                p.style.display="unset";
            };
        }
        else if(a.id==a2.id){
            a.onclick= () =>{
                p.style.display="none";
            };
        }
    }
}