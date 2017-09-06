var express = require( 'express');
var path = require( 'path' );
var port = 3000;
var app = express();
var bodyParser = require('body-parser');

// create a counter in server.js 
// that counts how many times the get route has been called
var jenCount = 0;

// return an object from the server that has the number of times the route has been called
var jenObject = {
  calls: 0
};

app.use( express.static( 'public' ) );
app.use(bodyParser.urlencoded({
  extended: true
}));

// spin up server
app.listen( port, function(){
  // server side logs show up in terminal
  console.log( 'server up on', port );
}); // end spin up server

// base url
app.get( '/', function( req, res ){
  // this is the root url
  console.log( 'base URL hit' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

// Once the request is received on the server, use a console.log
// to show that the request was received.The server will next send
// back a response to the client.
app.get('/jen', function (req, res) {
  console.log('request for jen received');

  //  and show in terminal with console.log
  jenCount += 1;

  jenObject.calls = jenCount;
  console.log('jenCount ->', jenCount);

  // return an object from the server that has the number of times the route has been called
  res.send(jenObject);
  // res.send('jen request');
}); // end jen url

app.post('/jen', function (req, res) {
  console.log('post for jen: ', req.body.message);
  res.send();
}); // end jen post

//  and show in terminal with console.log