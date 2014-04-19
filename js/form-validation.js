$(function(){
  $('input').val(null);
  $.validator.addMethod(
    "customUrl",
    function (value, element) {
      // put your own logic here, this is just a (crappy) example 
      return value.match(/^(((http){1}\:\/{2})|(www\.){1})?[A-Za-z0-9]+(\.[a-z]+)+.*/);
    },
    "Sisesta korrektne url"
  );

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
      $(element).parent().children('span').addClass('glyphicon glyphicon-remove form-control-feedback');
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).parent().removeClass('has-error').addClass(validClass);  
    },
    success: function(label) {
      label.parent().addClass('has-success');
      label.parent().children('span').removeClass('glyphicon glyphicon-remove form-control-feedback').addClass('glyphicon glyphicon-ok form-control-feedback');
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
    success: function(label) {
      label.addClass('hidden-label');
    }
  });
  $('.new-citizen').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      image_url: {
        required: true,
        customUrl: true
      },
      birth_date: {
        required: true
      }
    },
    messages: {
      name: {
        required: "Palun sisesta kodaniku nimi",
        minlength: "Nimi peab vähemalt 2 tähte pikk olema" 
      },
      image_url: {
        required: "Palun sisesta pildi url",
        url: "Pildi url on ebakorrektne" 
      },
      birth_date: {
        required: "Palun sisesta sünnikuupäev"
      }
    },
    success: function(label) {
      label.addClass('hidden-label');
    }
  });
});