
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
    $('#txtMessage').focusin(()=>{
        socket.emit("typing-event");
    })
    $('#txtMessage').focusout(function(event) {
      /* Act on the event */
      socket.emit('typing-stop')
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
//khi co nguoi nhan tin den
socket.on('server-send-message',data=>{
  $("#list-message").append('<div class="ms">'+data.user+':'+data.message +'</div>')
})
//khi co nguoi dang go chu
socket.on('someone-typing-event',data=>{
  $('#typing').html(data);
})
//khi co nguoi khong go chu nua

socket.on('someone-stop-typing', data=>{
  $("#typing").html("");
})

