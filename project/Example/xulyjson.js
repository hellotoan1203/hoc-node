
var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"application/JSON"});
	var obj={
		ho:"Ngô",
		ten:"Hữu Toàn"
	}
	res.end(JSON.stringify(obj));
}).listen(1203);