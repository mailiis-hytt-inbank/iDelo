$(function(){
  collectSessionData();
  $.ajax({
    type: 'GET',
    url: 'http://localhost/cgi-bin/iDelo/get_citizen.py?'+location.search.substring(1).split('&')+"&user_id="+Id,
    dataType: 'json',
    success: function(data){
      var rows = {rows: data};
      var theTemplateScript = Templates.citizen;  
       var theTemplate = Handlebars.compile(theTemplateScript);  
      $('.main-container').append(theTemplate(rows));
    }
  });
  $('.search-box').val('');
});