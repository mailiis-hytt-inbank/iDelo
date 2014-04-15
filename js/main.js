$(function(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost/cgi-bin/iDelo/show_complaints.py',
    dataType: 'json',
    success: function(data){
      var rows = {rows: data};
      var theTemplateScript = Templates.main;  
       var theTemplate = Handlebars.compile(theTemplateScript);  
      $('.main-container').append(theTemplate(rows));

      $('.panel-default').on('click', function(){
        window.location.href = "complaint.html?id="+$(this).attr('data-id');
      });
    }
  });
});