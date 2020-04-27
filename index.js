var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');
console.log('PROCESS.env.SECRETS_DEMO_USER_PASSWD' + PROCESS.env.SECRETS_DEMO_USER_PASSWD);
console.log('PROCESS.env.SECRETS_DEMO_USER' + PROCESS.env.SECRETS_DEMO_USER);
