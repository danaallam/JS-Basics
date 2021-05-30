document.addEventListener('DOMContentLoaded', init);

function init(){
    function info(){
        var fn = document.getElementById("shoe_size").value;
        var sn = document.getElementById("year").value;
        var add = (fn * 2 + 5 )* 50 - sn + 1766;
        alert('Here is your calculation: '+add);
    }
    document.getElementById("validate").addEventListener('click', info);
}