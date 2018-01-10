//create server
var express =require('express');
var app=express();
app.use(express.static('./public'));
var server=require('http').Server(app);
var io=require('socket.io')(server);

//processes in servc
server.listen(3000);
app.set("view engine","ejs");
app.set("views","./views")
app.get("/",(req,res)=>{
  res.render("trangtru")
})
io.on('connection',(socket)=>{
  socket.on("Client-send-data",(i)=>{
    console.log("Noi dung: "+i);
    //Send to all client
    //io.sockets.emit("Server-send-data",i+"888")
    //--------------------------------------
    //Send to one client emit on server
    socket.emit("Server-send-data", i+"888")
 })
  socket.on('disconnect',function(){
    console.log("ngat ket noi: "+socket.id);
  })
})
