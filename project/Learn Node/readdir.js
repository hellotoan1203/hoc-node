var fs = require("fs"),
    path = require("path");

var p = process.argv[2]
fs.readdir(p, function (err, files) {
    if (err) {
        throw err;
    }else{
        var p=files[1].toString();
        var s=p.substring(p.lastIndexOf("."), p.length)
        files.filter(function(file){
            return file.toString().endsWith(s);
        }).forEach(function(file){
            console.log(file.toString())
        })

      }   

 
});