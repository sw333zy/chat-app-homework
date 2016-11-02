(function() {
    'use strict';

    window.chat.listenForMessages(function messageHandler(data) { });

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
                .done(function handleMessageSucess(data) {
                    console.log('working', data)
                })
                .fail(function handleMessageFail(xhr) {
                    console.log('sorry', xhr)
                })



        });









}());
