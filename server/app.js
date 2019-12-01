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
app.use(cors())
const server = http.Server(app)



const dbcon = require('./config/database');

// --------- mongoDB -----------
mongoose.connect(dbcon.getConnectionConfig.mongodb, { useNewUrlParser: true,poolSize: 5 });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});


require('./routes/api')(app);

var serverPort = 2002
server.listen(serverPort, function(){
    console.log(`Server listening on *: ${serverPort}`)
})