var map, infoWindow, pos

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        initMap()
    })
}else{
    alert('tu navegador no soportala geolocalizacion')
}

function initMap(){
   var mapContainer = document.getElementById('map')
   var config = {
       center:{lat:-34.37,lng:150.644 },
       zoom: 5
   }
   map = new google.maps.Map(mapContainer,config)
   infoWindow = new google.maps.InfoWindow({map: map})
}