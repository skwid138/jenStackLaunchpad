console.log( 'js' );

function onReady(){
    console.log('doc ready');
// When the user clicks the button on the DOM a request is sent to a GET route the server.
    // $('#requestButton').on('click', callJen);
    $('#requestButton').on('click', callJen);

    // run GET $ajax call on page load
    callJen();
}

function callJen(){
    $.ajax({
        method: 'GET',
        url: '/jen',
        success: function (response) {
            // When the client receives the response console.log it out.
            console.log(' back from server with: ', response);
            var $div = $('<div>');
            $div.append(response.calls);
            // :last-child
            $('main').append($div);
        }
    });
}

// function appendJen ( ) {
//     $.ajax({
//         method: 'GET',
//         url: '/jen',
//         success: function (response) {
//             var $div = $('<div>');
//             $div.append(response);
//             // :last-child
//             $('main').append($div);
//         }
//     });
// }

$(document).ready(onReady);
