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
});