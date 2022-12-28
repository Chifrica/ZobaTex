//Slide-show
var myIndex = 0;
carouse();
slideShow();

function carouse(){
    var i;
    var x = document.getElementsByClassName("composite__photo composite__photo--p3");
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    myIndex++;
    if(myIndex > x.length){
        myIndex = 1;
    }
    x[myIndex-1].style.display = "block";
    setTimeout(carouse, 5000);
}