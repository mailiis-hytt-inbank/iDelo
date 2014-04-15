$(function(){ 
  var lat = 47.791766;
  var log = 29.416494;
  var map_canvas = document.getElementById('map_canvas');
  var map_options = {
    center: new google.maps.LatLng(lat, log),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(map_canvas, map_options);
  var myLatlng = new google.maps.LatLng(lat, log);
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    draggable:true,
    animation: google.maps.Animation.DROP
  });
    $('.latitude').val(lat);
    $('.longtitude').val(log);


  google.maps.event.addListener(marker, 'dragend', function(evt){
    // TODO: on submit get coordinates
    console.log(evt.latLng.lat());
    $('.latitude').val(evt.latLng.lat());
    console.log(evt.latLng.lng());
    $('.longtitude').val(evt.latLng.lng());

});
});

