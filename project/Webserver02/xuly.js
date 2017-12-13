var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/html"});
	var buffer=fs.readFileSync(__dirname+"/index.html","utf-8");
	res.end(buffer);
}).listen(1203);