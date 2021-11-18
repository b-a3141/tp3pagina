let map;
// Nombre del proyecto para la api turismoTP3 
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.6037345, lng: -58.3837591 },
    zoom: 15,
    mapTypeId: 'hybrid',
    scaleControl: true,
    fullscreenControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
},
  });
}