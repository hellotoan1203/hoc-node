var express=require('express');
var app=express();
app.use(express.static('public'));
var server=require('http').createServer(app);
var io=require('socket.io')(server);
app.set('view engine','ejs');
app.set('views','view');
app.get('/',(req,res)=>{
	res.render('index');
})
io.on('connection',socket=>{
	socket.on('create-room',data=>{
		socket.join(data);
		socket.Phong=data;
		let rooms=[];
		for(r in socket.adapter.rooms){
			rooms.push(r);
		}
		io.sockets.emit('server-send-listroom',rooms);
		socket.emit('socket-room',data);
	})

	socket.on('send-message',data=>{
		io.sockets.in(socket.Phong).emit("server-chat",data);
	})


})
server.listen(3000);