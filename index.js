var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
    var isRoot = req.url.match(new RegExp("^/+$", "g"));
    var path = isRoot ? "/index.html" : request.url;
    fs.readFile('.' + path, function(err, data) {
        if (!err) {
            var dotoffset = path.lastIndexOf('.');
            var mimetype = dotoffset == -1
                            ? 'text/plain'
                            : {
                                '.html' : 'text/html',
                                '.ico' : 'image/x-icon',
                                '.jpg' : 'image/jpeg',
                                '.png' : 'image/png',
                                '.gif' : 'image/gif',
                                '.css' : 'text/css',
                                '.js' : 'text/javascript'
                                }[ path.substr(dotoffset) ];
            res.setHeader('Content-type' , mimetype);
            res.end(data);
        } else {
            console.log ('file not found: ' + request.url);
            res.writeHead(404, "Not Found");
            res.end();
        }
    });
});

app.listen(app.get('port'), function () {
    console.log("The web server is running. Please open http://localhost:8888/ in your browser.");
});