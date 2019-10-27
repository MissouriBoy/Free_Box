const express = require('express');
const http = require('http');
const AWS = require('aws-sdk');
const fs = require('fs');
const app = express();
const server = http.createServer(app);
app.use(express.static(__dirname));



// Server will always find an open port.
const port = process.env.PORT || 3001;
server.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});

app.post('/songStatus', async (req, res) => {
    console.log(req);

    // Respond with a successful prompt.
    response = {
        message:'File uploaded successfully',
        filename: "Debug"
    };
    res.end( JSON.stringify( response ) );
});

app.post('/setTime', async (req, res) => {
    console.log(req);

    // Respond with a successful prompt.
    response = {
        message:'File uploaded successfully',
        filename: "Debug"
    };
    res.end( JSON.stringify( response ) );
});