//Prepare server
var express = require('express');
var app = express();
app.use(express.static('public'));
app.set("view engine","ejs");
app.set("views","./views");
var server = require('http').createServer(app);
var io = require('socket.io')(server);
server.listen(3000);
var listUser=['aaa'];

//Process Sever
app.get('/',(req,res)=>{
  res.render('trangchu');
})
io.on('connection',socket=>{
  //khi co nguoi dang nhap
  socket.on('client-send-userName',(data)=>{
    if(listUser.indexOf(data)>=0){
      socket.emit('server-send-error','Your username has been used')
    }else{
      listUser.push(data);
      socket.userName = data;
      socket.emit('server-send-success',data);
      io.sockets.emit('server-send-listuser',listUser);
    }
  });
  //khi co nguoi log out
  socket.on('client-send-logout',()=>{
     let a = listUser.indexOf(socket.userName);
     listUser.splice(a,1);
     socket.broadcast.emit('server-send-listuser',listUser);
  })
  //when some people send a message
  socket.on('user-send-message',(data)=>{
    io.sockets.emit('server-send-message',{user: socket.userName, message:data});
  })
  //when someone are typing...
  socket.on('typing-event', data=>{
    var s=socket.userName+" is typing...";
    socket.broadcast.emit('someone-typing-event', s);
  })
  //when someone stop typing...
  socket.on('typing-stop',()=>{
    socket.broadcast.emit('someone-stop-typing');
  })
})
