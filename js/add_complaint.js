$(function(){ 
  $(document).on('click','.btn.btn-primary',function() {
    return false;
  });
  $('.new-complaint').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      crime: {
        required: true,
        minlength: 2
      }
    },
    messages: {
      name: {
        required: "Palun sisesta süüaluse nimi",
        minlength: "Nimi peab vähemalt 2 tähte pikk olema" 
      },
      crime: {
        required: "Palun sisesta kuritegu",
        minlength: "Kuritegu peab vähemalt 2 tähte pikk olema" 
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
      $('.current-types-select').attr('name', "type")
    }
  });
  $('.add-field').on('click', function(e){
    e.preventDefault();
    var field = "<div class='form-group'><label class='control-label col-sm-2 margin-right'></label><div class='col-sm-8'><input class='form-control field' name='picture' type='text' value='"+$('.new-field-data').val()+"'></div><span class='glyphicon glyphicon-remove remove-item'></span></div>";
    $('.images').append(field);
    $('.new-field-data').val("");
  });
  $('.new-complaint').on('click', '.remove-item', function(e){
     e.preventDefault();
    $(this).parent('.form-group').remove();
  });
  $('.registrate').on('click', function(e){
    even.preventDefault();
    
  })
});