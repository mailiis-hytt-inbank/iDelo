$(function(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost/cgi-bin/iDelo/get_citizens.py',
    dataType: 'json',
    success: function(data){
      var rows = {rows: data};
      var theTemplateScript = Templates.current_citizens;  
       var theTemplate = Handlebars.compile(theTemplateScript);  
      $('.current-citizens').append(theTemplate(rows));
    }
  });

  var yearRange = "1900:"+(new Date()).getFullYear()
  $( "#datepicker" ).datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: yearRange,
    dateFormat: "yy-mm-dd",
    dayNamesMin: [ "E", "T", "K", "N", "R", "L", "P" ],
    monthNamesShort: [ "Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember" ],
    firstDay: 1,
    maxDate: 0,
    beforeShow: function (input, inst) {
      setTimeout(function () {
        inst.dpDiv.css({
          top: 335,
          left: 370
        });
      }, 0);
    }
  });
  $('.add_citizen').on('click', function(e){
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'http://localhost/cgi-bin/iDelo/add_citizen.py?'+$('.new-citizen').serialize(),
      success: function(data){
        console.log(data);
        window.location.href = "citizen.html?id="+data;
      }
    });
  })
});