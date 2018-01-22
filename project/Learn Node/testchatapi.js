const fs = require("fs");
const login = require("facebook-chat-api");
var pr= require("properties-reader");
var p=pr('login.properties');
var user=p.get('userID').toString()
var pass=p.get('pass').toString();
var obj = {
	email:user,
	password:pass
};


msg="Mình là bot! Thay mặt chủ bot chúc bạn sinh nhật vui vẻ, hạnh phúc bên gia đình và người thân";
login(obj, (err, api) => {
    if(err) return console.error(err);

    api.getFriendsList((err, data) => {
        if(err) return console.error(err);
       	for (var i = 0; i < data.length; i++) {
          if(data[i].isBirthday) {
          	api.sendMessage(msg,data[i].userID);
          	console.log(data[i].userID);

          }
       	}
    });

});