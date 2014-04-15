$(function(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost/cgi-bin/iDelo/get_citizen.py?'+location.search.substring(1).split('&'),
    dataType: 'json',
    success: function(data){
      var rows = {rows: data};
      console.log(data[0]);
      console.log(new Date(Date.parse(data[0][3])));
      var theTemplateScript = Templates.citizen;  
       var theTemplate = Handlebars.compile(theTemplateScript);  
      $('.main-container').append(theTemplate(rows));
    }
  });
  $('.search-box').val('');
});