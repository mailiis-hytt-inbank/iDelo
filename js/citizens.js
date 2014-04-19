$(function(){
  $.ajax({
    url: "http://localhost/cgi-bin/iDelo/get_citizens.py",
    dataType: "json",
    success: function(data){
      var rows = {rows: data};
      var theTemplateScript = Templates.citizens;  
       var theTemplate = Handlebars.compile(theTemplateScript);  
      $('.main-container').append(theTemplate(rows));
    }
  });
})