$(function(){
  $('.new-type').validate({
    rules: {
      complaint_type: {
        required: true,
        minlength: 2
      }
    },
    messages: {
      complaint_type: {
        required: "Sisesta tüübi nimetus",
        minlength: "Nimi peab olema vähemalt 2 tähte pikk"
      }
    },
    highlight: function(element, errorClass, validClass) {
      $(element).parent().addClass('has-error').removeClass(validClass);
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).parent().removeClass('has-error').addClass(validClass);  
    },
    success: function(label) {
      label.parent().addClass('has-success');
      label.parent().children('span').addClass('form-control-feedback');
      label.addClass('hidden-label');
    }
  });
  $.ajax({
    type: 'GET',
    url: 'http://localhost/cgi-bin/iDelo/get_types.py',
    dataType: 'json',
    success: function(data){
      var rows = {rows: data};
      var theTemplateScript = Templates.current_types;  
       var theTemplate = Handlebars.compile(theTemplateScript);  
      $('.current-types').append(theTemplate(rows));
    }
  });
  $.ajax({
    type: 'GET',
    url: 'http://localhost/cgi-bin/iDelo/get_difficulties.py',
    dataType: 'json',
    success: function(data){
      var rows = {rows: data};
      var theTemplateScript = Templates.difficulties;  
       var theTemplate = Handlebars.compile(theTemplateScript);  
      $('.difficulties').append(theTemplate(rows));
      $('.difficulty_id').val([1]);
    }
  });
  $('.add_type').on('click', function(e){
    e.preventDefault();
    if(!$('.new-type').valid()){
      return;
    };
    $.ajax({
      type: 'POST',
      data: $('.new-type').serialize(),
      url: 'http://localhost/cgi-bin/iDelo/add_type.py',
      success: function(){
        window.location.href = "main.html";
      }
    })
  });
});