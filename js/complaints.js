$(function(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost/cgi-bin/iDelo/get_my_complaints.py',
    dataType: 'json',
    success: function(data){
      var rows = {rows: data};
      var theTemplateScript = Templates.complaints_table;  
       var theTemplate = Handlebars.compile(theTemplateScript);  
      $('.tbody').append(theTemplate(rows));
      $('.table').tablesorter();
    }
  });
  
  $('.search-box').val('');
});