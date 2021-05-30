document.addEventListener('DOMContentLoaded', init);

function init(){
    function info(){
        var fn = document.getElementById("first_number").value;
        var sn = document.getElementById("second_number").value;
        var div = parseInt(fn) % parseInt(sn);
        alert('The remainder of '+fn+' and '+sn+' is: '+div);
    }
    document.getElementById("validate").addEventListener('click', info);
}