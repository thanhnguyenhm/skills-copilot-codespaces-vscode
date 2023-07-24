// create web server
const http = require('http');
const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});