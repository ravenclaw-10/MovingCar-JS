var cars, altitude, speed, distance;
function activateCars(){
    cars = document.querySelectorAll('div.cars');
    for(var i=0; i < cars.length; i++){
        altitude = cars[i].dataset.altitude;
        console.log(altitude);
        speed = cars[i].dataset.speed;
        console.log(speed);
        distance = cars[i].dataset.carDistance;
        console.log(distance);
        cars[i].style.top = altitude+"px";
        cars[i].style.transitionDuration = speed+"s";
        cars[i].style.left = distance+"px";
    }
}
window.addEventListener("load", activateCars);
