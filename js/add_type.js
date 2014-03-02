$(function(){
  $('.new-complaint').validate({
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
      label.addClass('hidden-label');
    }
  });
});