var http = require("http");
var AWS = require('aws-sdk');
var uuid = require('node-uuid');


http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   
    // Create an S3 client
    var s3 = new AWS.S3();
   
   // List S3 Bucket
   var params = {
    Bucket: 'rohidprojecta', /* required */
   };
   s3.listObjects(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
   });
   
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8080);


