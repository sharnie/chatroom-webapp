$(document).ready(function(){
  var entryUrl, chatId;
  entryUrl = '/entry';
  chatId = $('#chat').data('id');

  function feed(){
    $('#chat').load(entryUrl, function(){
      setTimeout(feed, 4200);
    });
  };
  feed();

  $.when($.ajax(entryUrl)).done(function(){
    $('#chat').scrollTop($('#chat')[0].scrollHeight);
  });

  $('#message-form').on('submit', function(e) {
    var postData, formURL, formMethod, form;
    postData = $('#message-form :input').serializeArray();
    formURL = $(this).attr('action');
    formMethod = $(this).attr('method');
    form = $(this);

    $.ajax({
      url: formURL,
      type: formMethod,
      data: postData,
      complete: function(){
        $('#chat').load(entryUrl, function(){
          $(this).scrollTop($(this)[0].scrollHeight);
        });
      }
    });
    
    e.preventDefault();
    form[0].reset();
  });
});