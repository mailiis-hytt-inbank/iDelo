$(function(){
  $('input').val(null); 
  $('.registration-form').validate({
    rules: {
      password: {
        required: true,
        minlength: 5
      },
      confirm_password: {
        required: true,
        minlength: 5,
        equalTo: "#password"
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: "Palun sisalda korrektne e-maili aadress",
      password: {
        required: "Palun sisesta parool",
        minlength: "Parool peab vähemalt 5 tähte pikk olema" 
      },
      confirm_password: {
        required: "Palun sisesta parooli kordus",
        equalTo: "Paroolid ei klapi"
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
      label.parent().children('span').addClass('glyphicon glyphicon-ok form-control-feedback');
      label.addClass('hidden-label');
    }
  });
  $('.login-form').validate({
    rules: {
      password: {
        required: true,
        minlength: 5
      },
      email: {
        required: true,
        email: true
      }, 
    },
    messages: {
      email: "Palun sisalda korrektne e-maili aadress",
      password: {
        required: "Palun sisesta parool",
        minlength: "Parool peab vähemalt 5 tähte pikk olema" 
      }
    },
    highlight: function(element, errorClass, validClass) {
      $(element).parent().addClass('has-error').removeClass(validClass);
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).parent().removeClass('has-error').addClass(validClass);  
    },
    success: function(label) {
      label.removeClass('error').addClass('hidden-label');
    }
  });
});