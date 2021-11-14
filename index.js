var cars, altitude, speed, distance;
function activateCars(){
    cars = document.querySelectorAll('div.cars');
    for(var i=0; i < cars.length; i++){
        altitude = cars[i].dataset.altitude;
        speed = cars[i].dataset.speed;
        distance = cars[i].dataset.carDistance;
        cars[i].style.top = altitude+"px";
        cars[i].style.transitionDuration = speed+"s";
        cars[i].style.left = distance+"px";
    }
}
window.addEventListener("load", activateCars);