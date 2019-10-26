const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

// Server will always find an open port.
const port = process.env.PORT || 3001;
server.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});

// Access example.com/
app.get('/', (req, res) => {
    res.send("I love HackSchool.");
});

// Access example.com/memes
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
