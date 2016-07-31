var http = require('http');
var fs = require('fs');
http.createServer(function (req, res){
	var name = require('url').parse(req.url, true).query.name;

	if(name == undefined){
		name = 'world';
	}
	
	else{
		res.writeHead(200, {'Content-Type': 'text/plain'});
         res.end('Hello ' + name + '\n');
	}

}).listen(8124);
console.log('Server running at port 8124');