document.addEventListener('DOMContentLoaded', init);
function init(){
    let div=document.createElement("div");
    div.id="text";
    let line=document.querySelector("#name");
    document.body.appendChild(div);
    line.addEventListener("blur", change, false);
    function change(){
        div.innerHTML=line.value;
    }
}