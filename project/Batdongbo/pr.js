/*
let aPromise=new Promise((resolve,reject)=>{
resolve('Hello');
})
aPromise.then((msg)=>console.log('Da thuc thi ' +msg))
*/

/*
let add=(a,b)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(typeof a!='number'||typeof b!='number'){
        return reject(new Error('tham so phai la kieu number'));
      }
      resolve(a+b)
    },2000);
  });
}
add(4,5).then(res=>console.log(res), err=>console.log(err+''))
*/
var fs=require('fs');
let read= (filename)=>{
  return new Promise((resolve,reject)=>{
    fs.readFile(filename,'utf8',(err,data)=>{
      if(err) return reject(err+'');
      resolve(data);
    });
  });
}

read('./demo.txt').then(res=>{console.log(res)},rej=>{console.log(rej)})
