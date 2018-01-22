const fs = require("fs");
const login = require("facebook-chat-api");
var obj = {
	email:'',
	password: ''
};

 var msg="Chúc mọi người năm mới vui vẻ, thật nhiều sức khỏe và thành công trong cuộc sống ạ!";
login(obj, (err, api) => {
    if(err) return console.error(err);

    api.getFriendsList((err, data) => {
        if(err) console.log(err);
       	for (var i = 0; i < data.length; i++) {
					let d = new Date();
					if(d.getDate()==1){
						api.sendMessage(msg,data[i].userID);
					}

       	}
    });

});
