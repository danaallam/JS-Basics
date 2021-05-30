document.addEventListener('DOMContentLoaded', init);
function init(){
    const text=document.querySelector("#name");
    text.addEventListener("blur", msg, false);
    function msg(){
        alert('thank you for participating!');
    }
}