var express = require( 'express');
var path = require( 'path' );

var app = express();

app.use( express.static( 'public' ) );

// spin up server
app.listen( 3000, function(){
  // server side logs show up in terminal
  console.log( 'server up pn 3000' );
}); // end spin up server

// base url
app.get( '/', function( req, res ){
  // this is the root url
  console.log( 'base URL hit' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url
