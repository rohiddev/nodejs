//Load express module with `require` directive
var express = require('express')
var app = express()


//Define request response in root URL (/)
app.get('/', function (req, res) {
  console.log('DEMO USER' + process.env.SECRETS_DEMO_USER)
  console.log('DEMO PASSWOR' + process.env.SECRETS_DEMO_USER_PASSWD)
  res.send('Hello hello World!!!!')
})

app.get('/hello', function (req, res) {
  console.log('DEMO USER' + process.env.SECRETS_DEMO_USER)
  console.log('DEMO PASSWOR' + process.env.SECRETS_DEMO_USER_PASSWD)
  res.send('Hello World!')
})


//Launch listening server on port 8081
app.listen(8080, function () {
  console.log('DEMO USER' + process.env.SECRETS_DEMO_USER)
  console.log('DEMO PASSWOR' + process.env.SECRETS_DEMO_USER_PASSWD)
  console.log('app listening on port 8080!')
})
