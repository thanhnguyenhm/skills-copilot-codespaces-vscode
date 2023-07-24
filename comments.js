// create a web server
// 1. create a web server
// 2. load the html page
// 3. load the comments.json file
// 4. send the json file back to the client

// 1. Create web server
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){
	// 2. load the html page
	fs.readFile('./index.html', 'utf8', function(err, html){
		// 3. load the comments.json file
		fs.readFile('./comments.json', 'utf8', function(err, comments){
			// 4. send the json file back to the client
			// 4.1 parse the json file
			comments = JSON.parse(comments);
			// 4.2 insert the comments into the html page
			html = html.replace('<!-- comments -->', comments.map(function(comment){
				return '<li>' + comment + '</li>';
			}).join(''));
			// 4.3 send the html page back to the client
			res.setHeader('Content-Type', 'text/html');
			res.writeHead(200, 'OK');
			res.write(html);
			res.end();
		});
	});
});

server.listen(8080, 'localhost', function(){
	console.log('Server is running at http://localhost:8080');
});