$(function(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost/cgi-bin/iDelo/get_complaint.py?'+location.search.substring(1).split('&'),
    dataType: 'json',
    success: function(data){
      var rows = {rows: data};
      var theTemplateScript = Templates.complaint_show;  
       var theTemplate = Handlebars.compile(theTemplateScript);  
      $('.main-container').append(theTemplate(rows));
      var map_canvas = document.getElementById('map_canvas');

      var map_options = {
        center: new google.maps.LatLng(rows.rows[3][0], rows.rows[3][1]),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      var map = new google.maps.Map(map_canvas, map_options);
      var myLatlng = new google.maps.LatLng(rows.rows[3][0], rows.rows[3][1]);
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        draggable:true,
        animation: google.maps.Animation.DROP
      });

      google.maps.event.addListener(marker, 'dragend', function(evt){
        // TODO: on submit get coordinates
        console.log(evt.latLng.lat());
        console.log(evt.latLng.lng());
      });
    }
  });
  $('.search-box').val('');
});