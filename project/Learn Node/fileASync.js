
var fs=require('fs');
var content;
fs.readFile(process.argv[2], function callback(err, data){
	if(err){
		console.log(err)
	} else {
		content=data.toString().split('\n').length-1;
		console.log(content)
	}
});
