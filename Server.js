var http = require('http');
var port = process.env.PORT;
http.createServer(function(req,res) {
    res.writeHead(600, { 'Content-Type': 'text/plain' });
    res.end('Hello World!!\n');}).listen(port);