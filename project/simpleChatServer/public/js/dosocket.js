
var socket=io("http://localhost:3000");
$(document).ready(function(){
    $("#loginform").show()
    $("#chatform").hide()
    $("#btnSubmit").click(()=>{
      socket.emit("client-send-userName", $("#txtname").val());
    })
    $("#btnLogout").click(()=>{
      socket.emit('client-send-logout')
      $("#loginform").show()
      $("#chatform").hide()
    })
    $("#btnSend").click(function(event) {
      socket.emit("user-send-message", $("#txtMessage").val())
    });

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
socket.on('server-send-message',data=>{
  $("#list-message").append('<div class="ms">'+data.user+':'+data.message +'</div>')
})


