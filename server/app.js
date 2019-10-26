const express = require('express');
const http = require('http');
const AWS = require('aws-sdk');
const fs = require('fs');
const app = express();
const server = http.createServer(app);
app.use(express.static(__dirname));

// Auth ID's for S3 implementation (will be redacted and invalidated later)
const ID = 'AKIAIY3ST4OACMJZG3EA';
const SECRET = 'zOE8N4f+ENBQdRy2vB6AjLIbur9EkWDHFguzUAO3';

// Create the S3 object
const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

// Server will always find an open port.
const port = process.env.PORT || 3001;
server.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});

function uploadFnct() {
    const fileContent = fs.readFileSync($('#input').val());

    const params = {
        Bucket: freejukebox.space,
        Key: 'Heh',
        Body: fileContent
    }
}

function sayFileName() {
    console.log($('#input').val());
}
