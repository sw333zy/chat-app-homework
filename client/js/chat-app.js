(function() {
    'use strict';

    var token;
    var name;
    var message;

    window.chat.listenForMessages(function messageHandler(data) {
      console.log(data);
      var message = $('.messages');
      message.append('<p>' + data.message + ' ' + data.username + '</p>');

    });




    $('.login')
        .on('submit', function userName(event) {
          event.preventDefault();

            $.ajax({
                    url: '/login',
                    method: 'POST',
                    data: JSON.stringify({
                        username: $('.username').val()

                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    }

                })
                .done(function handleSucess(data) {
                    token = data.token;
                    name = data.username;
                    console.log(name);
                    console.log('working', data)
                    console.log(token)
                })
                .fail(function handleFail(xhr) {
                    console.log('sorry', xhr)
                })



        });

        $('.send-message')
            .on('submit', function message(event) {
              event.preventDefault();

                $.ajax({
                        url: '/chat',
                        method: 'POST',
                        data: JSON.stringify({
                            message: $('.message').val()

                        }),
                        headers: {
                            Authorization: token,
                            'Content-Type': 'application/json'
                        }

                    })
                    .done(function handleSucess(data) {
                        console.log(data.message)
                        console.log(token)
                    })
                    .fail(function handleFail(xhr) {
                        console.log('sorry', xhr)
                    })



 });





}());
