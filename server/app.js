const express = require('express');
const http = require('http');
const AWS = require('aws-sdk');
const fs = require('fs');

const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const server = http.createServer(app);
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}));

// Auth ID's for S3 implementation (will be redacted and invalidated later)
const ID = '(Redacted)';
const SECRET = '(Redacted)';

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

app.get('/POST', (req, res) => {
    res.send("I love HackSchool.");
    console.log(req.files.file.name);
    console.log(req.files.file.path);
    console.log(req.files.file.type);
    var file = __dirname + "/" + req.files.file.name;
    
    fs.readFile( req.files.file.path, function (err, data) {
       fs.writeFile(file, data, function (err) {
          if( err ) {
             console.log( err );
             } else {
                response = {
                   message:'File uploaded successfully',
                   filename:req.files.file.name
                };
             }
         
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
    });
});

function uploadFnct(file) {
    const fileContent = fs.readFileSync(file);

    const params = {
        Bucket: "freejukebox.space",
        Key: 'Heh',
        Body: fileContent
    }

    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
}
