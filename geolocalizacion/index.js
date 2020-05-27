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