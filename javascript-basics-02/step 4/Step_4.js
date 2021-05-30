document.addEventListener('DOMContentLoaded', init);
function init(){
    const btn=document.querySelector("button");
    btn.addEventListener("click", reset, false);
    function reset(){
        let t=confirm("Are you sure you want to reset all fields?");
        if(t){
            document.querySelector("#name").value="";
            document.querySelector("#surname").value="";
            document.querySelector("#city").value="";
        }
    }
}