const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
let decipherId = 0;
let clientId = 0;
app.use(express.static(__dirname));

var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 8080}),
    CLIENTS=[];

wss.on('connection', function(ws) {
    CLIENTS.push(ws);

    console.log(clientId);
    CLIENTS[clientId].send(clientId);
    clientId++;

    ws.on('message', function(message) {
        console.log(message);
        decipherId = JSON.parse(message);
        console.log('received: %s and %s', decipherId.identifier, decipherId.message);
        sendAll(message);
    });
});

function sendAll (message) {
    for (var i=0; i<CLIENTS.length; i++) {
        if ( i != decipherId.identifier ) {
            CLIENTS[i].send(decipherId.message);
        }
    }
}

// Server will always find an open port.
const port = process.env.PORT || 3001;
server.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});