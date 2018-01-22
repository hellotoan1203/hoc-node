var fs=require('fs')
var buf=fs.readFileSync(process.argv[2])
var s=buf.toString();
var dem=s.split("\n").length-1;
console.log(dem)