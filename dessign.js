var bulb=0;
function findbulb(){
    if(bulb==0){
        document.getElementById("image").src = "./black.jpg";
        bulb=1;

    }
    else{
        document.getElementById("image").src = "on.car.jpg";
        bulb=0;
    }
}
