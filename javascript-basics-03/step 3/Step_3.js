document.addEventListener('DOMContentLoaded', init);
function init(){
    var p=document.querySelector("p");
    var g=document.querySelector(".green");
    var r=document.querySelector(".red");
    var b=document.querySelector(".blue");
    color1(g);
    color1(r);
    color1(b);
    function color1(c){
        if(c.className==g.className){
            c.onclick= () => {
                p.style.color="green";
            };
        }
        else if(c.className==r.className){
            c.onclick= () => {
                p.style.color="red";
            };
        }
        else{
            c.onclick= () => {
                p.style.color="blue";
            };
        }
    }
}