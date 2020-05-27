var map, infoWindow, pos

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        pos = {
            lat: position.coords.latitude,
            long: position.coords.longitude
        }
        initMap()
    })
}else{
    alert('tu navegador no soportala geolocalizacion')
}

function initMap(){
   var mapContainer = document.getElementById('map')
   var config = {
       center:{lat:-34.37,long:150.644 },
       zoom: 5
   }
   map = new google.com.maps.Map(mapContainer,config)
   infoWindow = new google.maps.infoWindow({map: map})
}