const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
app.use(express.static(__dirname));

var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 8080}),
    CLIENTS=[];

wss.on('connection', function(ws) {
    CLIENTS.push(ws);
    ws.on('message', function(message) {
        console.log('received: %s', message);
        sendAll(message);
    });
});

function sendAll (message) {
    for (var i=0; i<CLIENTS.length; i++) {
        CLIENTS[i].send(message);
    }
}

// Server will always find an open port.
const port = process.env.PORT || 3001;
server.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});