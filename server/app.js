const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const http = require('http')
const schedule = require('node-schedule')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var whiteListHost = ['http://localhost:8080']
const corsOptions = {
  origin: function (origin, callback) {
      if (whiteListHost.indexOf(origin) !== -1 || !origin) {
          callback(null, true); // ALLOW CORS
      } else {
          callback('Forbidden (not allowed by CORS) ', false); // BLOCKED BY CORS
      }
  },
  allowedHeaders: ['Origin', 'X-Requested-With', 'X-CSRF-TOKEN', 'Content-Type', 'Accept', 'Authorization','x-www-form-urlencoded'],
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// var corsOptions = {
//   "origin": "*",
//   "allowedHeaders": ['Origin', 'X-Requested-With', 'X-CSRF-TOKEN', 'Content-Type', 'Accept', 'Authorization','x-www-form-urlencoded','json'],
//   "optionsSuccessStatus": 200,
//   "credentials": true 
// }
// var corsOptions = {
//   origin: '*',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }


app.use(cors(corsOptions))
const server = http.Server(app)


const dbcon = require('./config/database');

// --------- mongoDB -----------
var dbbase = mongoose.createConnection(dbcon.getConnectionConfig.mongodb, { useNewUrlParser: true,poolSize: 5 });
// var db = dbbase.connection;
dbbase.on("error", console.error.bind(console, "connection error"));
dbbase.once("open", function(callback){
  console.log("Connection Succeeded");
});


require('./routes/api')(app);

var serverPort = 2002
server.listen(serverPort, function(){
    console.log(`Server listening on *: ${serverPort}`)
})