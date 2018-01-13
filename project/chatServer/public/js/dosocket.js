
var socket=io("http://localhost:3000");
$(document).ready(function(){
    $("#loginform").show()
    $("#chatform").hide()
    $("#btnSubmit").click(()=>{
      socket.emit("client-send-userName", $("#txtname").val());
    })
    $("#btnLogout").click(()=>{
      socket.emit('client-send-logout')
    })

})
//server bao loi
socket.on('server-send-error', (data)=>{
  alert(data);
})
//server bao da ket noi
socket.on('server-send-success',(data)=>{
  $("#loginform").hide()
  $("#chatform").show()
  $('#curent-user').html(data)
})
//server bao da dang ki thanh cong
socket.on('server-send-listuser',data=>{
  $("#box-content").html("")
  data.forEach(i=>{
    $("#box-content").append("<div class='user-online'>"+i+"</div>")
  })
})

//khi co nguoi log out
socket.on('client-logout',(data)=>{
  $("#loginform").show()
  $("#chatform").hide()

})
