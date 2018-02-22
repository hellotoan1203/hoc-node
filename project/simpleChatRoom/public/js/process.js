var socket=io('http://localhost:3000')
jQuery(document).ready(function() {
	$('#btnCreate').click(function(event) {
		/* Act on the event */
		socket.emit('create-room',$('#txtRoom').val());
	});
	$('#btnChat').click(function(event) {
		/* Act on the event */
		socket.emit('send-message',$('#txtMessage').val())
	});
});

socket.on('server-send-listroom',data=>{
	$('#danhsach').html("");
	data.map(r=>{
		$('#danhsach').append('<h4>'+r+'</h4>');
	})
})
socket.on('socket-room',data=>{
	$('#current-room').html(data);
})
socket.on('server-chat',data=>{
	$('#chat-area').append('<p>'+data+'</p>')
})