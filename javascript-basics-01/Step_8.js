
document.addEventListener('DOMContentLoaded', init);

function init(){
    function info(){
        var age = document.getElementById("age").value;
        if(age<18)
            alert('You are under 18');
        else
            alert('You are over 18');
    }
    document.getElementById("validate").addEventListener('click', info);
}