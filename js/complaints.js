$(function(){
  if(Admin==0){
    $('.header').html("Kõik kaebused");
  }
  $.ajax({
    type: 'GET',
    url: 'http://localhost/cgi-bin/iDelo/get_my_complaints.py?admin=' + Admin + "&id=" + Id,
    dataType: 'json',
    success: function(data){
      if(data.length == 0){
        $('.main-container').append("<p>Sa pole esitanud nädala jooksul ühtegi kaebust</p>")
      }else{
        var rows = {rows: data};
        var theTemplateScript = Templates.complaints_table;  
         var theTemplate = Handlebars.compile(theTemplateScript);  
        $('.main-container').append(theTemplate(rows));
        $('.table').tablesorter();
      }
    }
  });
  
  $('.search-box').val('');
});