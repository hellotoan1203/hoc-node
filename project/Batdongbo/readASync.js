var fs=require('fs');
fs.readFile('./demo.txt','utf8',(err,data)=>{
  if(err) return console.log('Loi: '+ err);
  console.log('DULieu: '+data);
})
console.log('ket thuc');
