function insertData() {
  var username = readCookie("usersession");
  if (username.indexOf("@") !== -1) {
    username = username.substring(0, username.indexOf("@"));
    if (username.length == 0) {
      username = "user";
    }
  }
  if (username.length > 18) {
    username = username.substring(0, 15);
    username = username + " ...";
  }
  $("#username").html(username);
}

function collectSessionData() {
  var user = readCookie("usersession");
  console.log("user: " + user);
  if (!user) {
    window.location.href = "login.html";
  }
}

function readCookie(name) {
  return $.cookie(name);
}

function writeCookie(name, value) {
  $.cookie(name, null);
  $.cookie(name, value);
}

function endSession() {
  $.cookie("usersession", null);
  $.session.clear();
}

function getUserIdAdmin(){
  var username = readCookie("usersession");
  var idAdmin = [];
  $.ajax({
    url: "http://localhost/cgi-bin/iDelo/get_user.py?email=" + username,
    async: false,
    dataType: 'json',
    success: function(data){
      idAdmin = [data[0][0], data[0][1]];
    }
  });
  return idAdmin;
}

function checkRegister() {
  var email = $("#email").val();
  var name = $("#name").val();
  var pass = $("#password").val();
  var passC = $("#confirm_password").val();
  var emailTest = false;
  var usererror = false;

  $.ajax({
    type: "GET",
    url: "http://localhost/cgi-bin/iDelo/otsi.py",
    dataType: "json",
    success: function(data){
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        if (email.toLowerCase().indexOf(data[i][1].toLowerCase()) == 0 && email.length == data[i][1].length) {
          usererror = true;
        }
      }
      if (usererror == true) {
        $('#email').parent().addClass('has-error').removeClass('valid');
        var label = $('#email').parent().children('label');
        var span = $('#email').parent().children('span');
        span.parent().children('span').addClass('glyphicon glyphicon-remove form-control-feedback');
        label.removeClass('hidden-label');
        label.html("Nimi juba kasutusel!");
        return false;
      }
      
      $.ajax({
        type: 'POST',
        url: "http://localhost/cgi-bin/iDelo/salvesta.py?table=users&email=" + email + "&password=" + pass + "&name=" + name,
        success: function(){
          document.location.href = "login.html";
        }
      });
    }
  }).error(function(){
    console.log(arguments);
  });
}

function checkLogin() {
  $.ajax({
    url: "http://localhost/cgi-bin/iDelo/otsi.py",
    dataType: "json",
    success: function(data){
      var email = $("#email").val();
      var pass = $("#password").val();
      var kontroll = false;
      var userId = 0;
      for (var i = 0; i < data.length; i++) {
        if (email.indexOf(data[i][1]) == 0 && pass.indexOf(data[i][2]) == 0) {
          kontroll = true;
          userId = data[i][0];
        }
      }
      if (kontroll != true) {
        $('.error-span').removeClass('hidden-label').addClass('error-label').html("Email ja/või parool ei klapi!");
        $("#email").parent().removeClass("valid").addClass("error-class");
        $("#password").parent().removeClass("valid").addClass("error-class");
        return false;
      } else {
        writeCookie("usersession", email);
        $.session.remove('view');
        $.session.set('userId', userId);
        window.location.href = "main.html";
      }
    }
  });
} 