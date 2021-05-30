document.addEventListener('DOMContentLoaded', init);

function init(){
    function info(){
        var name = document.getElementById("name").value;
        var surname = document.getElementById("surname").value;
        var city = document.getElementById("city").value;
        alert("Name : " + name + "\nSurname : " + surname + "\nCity : " + city);
    }

    document.getElementById("validate").addEventListener('click', info);
}