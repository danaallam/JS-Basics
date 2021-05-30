document.addEventListener('DOMContentLoaded', init);

function init(){
    function info(){
        var fn = document.getElementById("first_number").value;
        var sn = document.getElementById("second_number").value;
        var mul = parseInt(fn) * parseInt(sn);
        alert(fn + " * "+sn+" = "+mul);
    }
    document.getElementById("validate").addEventListener('click', info);
}