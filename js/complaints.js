$(function(){
  $('.table').tablesorter();
  $('.search-box').val('');
  $('.show-by-type').validate({
    rules: {
      SelectName: { valueNotEquals: "default" }
    },
    messages: {
      SelectName: { valueNotEquals: "Please select an item!" }
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