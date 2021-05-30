document.addEventListener('DOMContentLoaded', init);
function init(){
    var img=document.querySelector("#image1");
    img.onmouseover = () => {
        img.style.border="3px solid red";
    };
    img.onmouseout = () => {
        img.style.border="none";
    };
}