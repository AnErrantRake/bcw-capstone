import express from 'express'
import cors from 'cors'
import bp from 'body-parser'
import DbContext from "./db/dbconfig"
import socket from './socket/index'

const server = express()
const enforce = require('express-sslify');
const httpServer = require("http").createServer(server)
const io = require('socket.io')(httpServer)

if (process.env.NODE_ENV === 'production') {
  // Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
  // a load balancer (e.g. Heroku). See further comments below
  server.use(enforce.HTTPS({ trustProtoHeader: true }));
}

//Fire up database connection
DbContext.connect()
socket.setIO(io)

//Sets the port to Heroku's, and the files to the built project 
var port = process.env.PORT
server.use(express.static(__dirname + '/../client/dist'))


var whitelist = ['http://localhost:8080', 'https://bcw-capstone-wafl.herokuapp.com/'];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions))

//REGISTER MIDDLEWARE
server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

//REGISTER YOUR SESSION, OTHERWISE YOU WILL NEVER GET LOGGED IN
import AuthController from './controllers/AuthController'
import Session from "./middleware/session"

server.use(new Session().express)
server.use('/account', new AuthController().router)

//YOUR ROUTES HERE!!!!!!
import BallotController from './controllers/BallotController';
import ElectionController from "./controllers/ElectionController.js"
import SearchController from "./controllers/SearchController"

server.use('/api/ballots', new BallotController().router);
server.use('/api/elections', new ElectionController().router)
server.use('/api/search', new SearchController().router)

//Default Error Handler
server.use((error, req, res, next) => {
  res.status(error.status || 400).send({ error: { message: error.message } })
})

//Catch all
server.use('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})

// @ts-ignore
httpServer.listen(port, () => {
  console.log('[SRV] Running on port', port)
})