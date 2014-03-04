$(function(){
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
      crime: {
        required: "Palun sisesta kuritegu",
        minlength: "Vähemalt 2 tähte pikk olema" 
      },
      name: {
        required: "Palun sisesta süüaluse nimi",
        minlength: "Nimi peab vähemalt 2 tähte pikk olema" 
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
  var url = '';
  var uploadButton = $('<button/>')
      .addClass('btn btn-primary')
      .prop('disabled', true)
      .text('Töötleb')
      .on('click', function () {
          var $this = $(this)
          var data = $this.data();
          $this.off('click')
               .text('Abort')
               .on('click', function () {
                      $this.remove();
                      data.abort();
                    });
          data.submit().always(function () {
            $this.remove();
          });
      });
  $('#fileupload').fileupload({
    url: url,
    dataType: 'json',
    autoUpload: false,
    acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
    maxFileSize: 5000000, // 5 MB
    disableImageResize: /Android(?!.*Chrome)|Opera/
        .test(window.navigator.userAgent),
    previewMaxWidth: 100,
    previewMaxHeight: 100,
    previewCrop: true,
    progressall: function (e, data) {
      var progress = parseInt(data.loaded / data.total * 100, 10);
      $('#progress .bar').css(
        'width',
        progress + '%'
      );
    }
  }).on('fileuploadadd', function (e, data) {
    data.context = $('<div/>').appendTo('#files');
    $.each(data.files, function (index, file) {
      var node = $('<p/>')
        .append($('<span/>').text(file.name));
      if (!index) {
        node.append('<br>')
            .append(uploadButton.clone(true).data(data));
      }
      node.appendTo(data.context);
    });
  }).on('fileuploadprocessalways', function (e, data) {
    var index = data.index,
      file = data.files[index],
      node = $(data.context.children()[index]);
    if (file.preview) {
      node.prepend('<br>')
          .prepend(file.preview);
    }
    if (file.error) {
      node.append('<br>')
          .append($('<span class="text-danger"/>').text(file.error));
    }
    if (index + 1 === data.files.length) {
      data.context.find('button').text('Lae üles')
                                 .prop('disabled', !!data.files.error);
    }
  }).on('fileuploadprogressall', function (e, data) {
    var progress = parseInt(data.loaded / data.total * 100, 10);
    $('#progress .progress-bar').css('width', progress + '%');
  }).on('fileuploaddone', function (e, data) {
    $.each(data.result.files, function (index, file) {
      if (file.url) {
        var link = $('<a>')
          .attr('target', '_blank')
          .prop('href', file.url);
        $(data.context.children()[index])
          .wrap(link);
      } else if (file.error) {
        var error = $('<span class="text-danger"/>').text(file.error);
        $(data.context.children()[index])
          .append('<br>')
          .append(error);
      }
    });
  }).on('fileuploadfail', function (e, data) {
    $.each(data.files, function (index, file) {
      var error = $('<span class="text-danger"/>').text('Üleslaadimine ebaõnnestus.');
      $(data.context.children()[index])
        // .append('<br>')
        .append(error);
    });
  }).prop('disabled', !$.support.fileInput)
    .parent().addClass($.support.fileInput ? undefined : 'disabled');
});