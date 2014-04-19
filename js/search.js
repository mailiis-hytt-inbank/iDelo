$(function(){
  $('.search-box').val('');
  $('.search-button').on('click', function(){
    $.ajax({
      type: 'GET',
      url: 'http://localhost/cgi-bin/iDelo/search.py?'+$('.search-form').serialize()+"&id="+Id,
      dataType: 'json',
      success: function(data){
        if(data.length == 0){
          $('.main-container').append("<p>Ei leitud ühtegi sellise sisuga kaebust</p>")
        }else{
          var rows = {rows: data};
          var theTemplateScript = Templates.main;  
           var theTemplate = Handlebars.compile(theTemplateScript);  
          $('.main-container').append(theTemplate(rows));
        }
      }
    }); 
  });
});