//require module
var express=require('express');
var bodyParser=require('body-parser');


//init var
var app=express();
var server=require('http').createServer(app);
var urlendcodedParser=bodyParser.urlencoded({extended: false});
var multer=require('multer');
//doing function
server.listen(3000);
app.set("view engine","ejs");
app.set("views","./views");
app.get("/demo",function(req,res){
	res.render("demo");
})
app.get("/upload",function(req,res){
	res.render("upload");
})
var storage=multer.diskStorage({
	destination: function(req,file,cb){
		cb(null,'./upload');
	},
	filename: function(req,file,cb){
		cb(null,file.originalname);
	}
})

var upload=multer({storage:storage})
app.post('/upload',upload.single('file'),function(req,res){
	console.log(req.file);
	res.send('upload thanh cong')
})



app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");
})
app.get("/tintuc/:id",function(req,res){
	res.send("Server nhan duoc id ="+req.params.id);
})
app.get("/",function(req,res){
	res.render("chitiet");
})
app.post("/tintuc",urlendcodedParser,function(req,res){
	var u=req.body.username;
	var p=req.body.password;
	res.send("User name: "+u+"  Password: "+p);
})
