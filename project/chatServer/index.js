//Prepare server
var express = require('express');
var app = express();
app.use(express.static('public'));
app.set("view engine","ejs");
app.set("views","./views");
var server = require('http').Server(app);
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
     socket.emit('client-logout');
  });
})
