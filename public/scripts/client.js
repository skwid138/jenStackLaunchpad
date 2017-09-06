console.log( 'js' );

function onReady(){
    console.log('doc ready');
// When the user clicks the button on the DOM a request is sent to a GET route the server.
    $('#requestButton').on('click', requestButton);
}

function requestButton(){
    $.ajax({
        method: 'GET',
        url: '/jen',
        success: function (response) {
            // When the client receives the response console.log it out.
            console.log(' back from server with: ', response);
        }
    });
}

$(document).ready(onReady);
