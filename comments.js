// create web server
// create a server object:
http.createServer(function (req, res) {
    // res.write('Hello World!'); //write a response to the client
    // res.end(); //end the response
    // res.end('<h1>Hello World!</h1>');
    // res.end('<h1>Hello World!</h1><p>Hello World!</p>');
    // res.end('<h1>Hello World!</h1><p>Hello World!</p><p>Hello World!</p>');
    // res.end('<h1>Hello World!</h1><p>Hello World!</p><p>Hello World!</p><p>Hello World!</p>');
    // res.end('<h1>Hello World!</h1><p>Hello World!</p><p>Hello World!</p><p>Hello World!</p><p>Hello World!</p>');
    // res.end('<h1>Hello World!</h1><p>Hello World!</p><p>Hello World!</p><p>Hello World!</p><p>Hello World!</p><p>Hello World!</p>');
    // res.end('<h1>Hello World!</h1><p>Hello World!</p><p>Hello World!</p><p>Hello World!</p><p>Hello World!</p><p>Hello World!</p><p>Hello World!</p>');
}).listen(8080); //the server object listens on port 8080