$(document).ready(function(){

  // (function feed(){
  //   $.ajax({
  //     type: 'GET',
  //     url: '/messages.json',
  //     success: function(messages){
  //       var templateString, template;
  //       _.each(messages, function(message){
  //         templateString = '<div class="entry">' +
  //                             '<div class="user">' +
  //                               '<div class="avatar">' +
  //                                 '<img alt="Sharnie Ivery" class="thumb-sm rounded" src="images/default-avatar.png">' +
  //                               '</div>' +
  //                               '<div class="username">' +
  //                                 '<a href="#">' +
  //                                   '@sharnieivery' +
  //                                 '</a>' +
  //                               '</div>' +
  //                               '<p><%= item.content %></p>' +
  //                             '</div>' +
  //                          '</div>';
  //         $('#chat').append(_.template(templateString, {item: message}));
  //       });

  //       $("#chat").animate({scrollTop: $('#chat .entry:last').offset().top - 30}, 100);
  //     },
  //     // complete: function(){
  //     //   setTimeout(feed, 1000);
  //     // }
  //   });
  // })();

  (function feed(){
    $('#chat').load('/entry', function(){
      setTimeout(feed, 4500);
    });
  })();

  $('#message-form').submit(function(e){
    var postData, formURL, formMethod, form;
    postData = $(this).serializeArray();
    formURL = $(this).attr('action');
    formMethod = $(this).attr('method');
    form = $(this);

    $.ajax({
      url: formURL,
      type: formMethod,
      data: postData,
      success: function(response){
      }
    });

    e.preventDefault();
    e.stopPropagation();
    form[0].reset();

    // e.unbind();
  });

  $('#message-form').on('submit', function(e) {
      e.preventDefault();
      $("#message-form :input").serializeArray();
      feed();
  });


  function ScrollToBottom(){
    $('#chat').scrollTop($('#chat')[0].scrollHeight); 
  }

  $.when($.ajax('/entry')).done(function(){
    ScrollToBottom();
  });
});