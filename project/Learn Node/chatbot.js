var login = require("facebook-chat-api");

var except = {};
var answeredThreads = {};

login({
    email: "mrtoanchuyentin97k54@gmail.com",
    password: "abc.123" },
    function callback(err, api) {
    if(err) return console.error(err);
    api.listen(function callback(err, message) {
        console.log(message.threadID);
        if(!answeredThreads.hasOwnProperty(message.threadID)){
            answeredThreads[message.threadID] = true;
            api.sendMessage("Toàn đang đi nhậu, sau hôm nay hãy nhẵn nhé. Hãy nhắn OK, sẽ có điều đặc biệt", message.threadID);
            return;
        }
        else if(massage.body==="OK"){
        	api.sendMessage("Đùa đấy chưa có chức năng đó đâu", message.threadID);
            return;
        }
    });
});
