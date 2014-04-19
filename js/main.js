$(function(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost/cgi-bin/iDelo/show_complaints.py?id='+Id,
    dataType: 'json',
    success: function(data){
      if(data.length == 0){
        $('.main-container').append("<p>Viimase nädala jooksul pole esitatud ühtegi kaebust</p>")
      }else{
        var rows = {rows: data};
        var theTemplateScript = Templates.main;  
         var theTemplate = Handlebars.compile(theTemplateScript);  
        $('.main-container').append(theTemplate(rows));
      }
    }
  });
});