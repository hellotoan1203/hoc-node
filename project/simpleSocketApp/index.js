var express=require('express');
var app=express();
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','./view');
var server=require('http').createServer(app);
var io=require('socket.io')(server);
server.listen(3000);
app.get('/',(req,res)=>{
	res.render('index');
})
var mang=[];
io.on('connection',socket=>{
	socket.on('send-info',data=>{
		mang.push( new hocvien(data.name,data.email,data.phone));
		io.sockets.emit('server-send-list', mang);
	})
})

function hocvien(name, email,phone){
	this.name=name;
	this.email=email;
	this.phone=phone;
}