var socket=io('http://localhost:3000');
$(document).ready(()=>{
	$('#btnSend').click(function(event) {
		/* Act on the event */
		socket.emit('send-info',{
			name: $('#txtName').val(),
			email: $('#txtEmail').val(),
			phone:$('#txtPhone').val()
		})
	});
})
socket.on('server-send-list', data=>{
	$('#ds').html("")
	data.map((hocvien,index)=>{
		$('#ds').append(`<div class="hocvien">
					<div class="hang1">id:`+index+` || <span>`+hocvien.name+`</span></div>
					<div class="hang2">`+hocvien.email+`||`+hocvien.phone+`</div>
					</div>`);
	})
})
