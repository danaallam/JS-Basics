document.addEventListener('DOMContentLoaded', init);
function init(){
    var i=0;
    const img=document.querySelector("#image1");
    img.addEventListener("mouseover", changeImg, false);
    function changeImg(){
        if(i%2==0){
        img.src="images/image1_2.jpg";
        }
        else{
            img.src="images/image1.jpg";
        }
        i++;
    }
}