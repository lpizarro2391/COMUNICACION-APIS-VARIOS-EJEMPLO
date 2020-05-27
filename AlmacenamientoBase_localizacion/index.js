
$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
  $('.modalM').click()
});


var map, infoWindow, pos, marker

if ( navigator.geolocation ) {
  navigator.geolocation.getCurrentPosition(function (position) {
    pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    initMap()
  })
} else {
  alert('Tu Navegador no soporta la Geolocalización')
}

function initMap() {
  var mapContainer = document.getElementById('map')
  var config = {
    center: {lat: -34.397, lng: 150.644},
    zoom: 5
  }
  map = new google.maps.Map(mapContainer, config)
  infoWindow = new google.maps.InfoWindow({ map: map })

}

var button = document.getElementById('btn-geo')
button.addEventListener('click', function() {
  map.setCenter(pos)
  map.setZoom(15)
  // infoWindow.setPosition(pos)
  // infoWindow.setContent('Ubicación Encontrada')
  var markerOpts = {
    position: pos,
    map: map
  }
  marker = new google.maps.Marker(markerOpts)

})


var Agenda = {
  init: function(){
    this.listenMapClick()
    this.sitiosGuardados = []
    sessionStorage.setItem('sitios',JSON.stringify(this.sitiosGuardados))
  },
  listenMapClick: function(){
    var self = this
    google.maps.event.addEventListener(map,'click',function(ev){
      var position = ev.latLng
      var modalInfo = document.getElementsByClassName('modalInfo')[0].click()
      var btnGuardar= document.getElementsByClassName('guardaInfo')[0]
      btnGuardar.onclick= function(e){
        e.preventDefault()
        var nombre = document.getElementsByClassName('nombre')[0]
        var site ={
          nombre:nombre,value
          descripcion: descripcion.value,
          latitud: position.lat(),
          longitud: position.lng(
        }
        self.saveAndPlaceMarker(site)
        nombre.value= ''
        descripcion.value = ''
        $('modalCaptura').closeModal()
      }
    })
  },



  
}