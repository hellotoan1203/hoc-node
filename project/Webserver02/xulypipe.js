var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/html"});
	fs.createReadStream(__dirname+"/index.html").replace("Chào","Hahaa").pipe(res);
}).listen(1203);