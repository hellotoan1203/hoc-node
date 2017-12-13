let add=(a,b)=>{
  return new Promise((resolve,reject)=>{
    if(typeof a !='number'||typeof b!='number'){
      return reject(new Error('Loi phep cong'))
    }
    return resolve(a+b);
  })
}
let multi=(a,b)=>{
  return new Promise((resolve,reject)=>{
    if(typeof a !='number'|| typeof b!='number'){
      return reject(new Error('Loi phep nhan'))
    }
    return resolve(a*b);
  })
}

Promise.all([add(3,4),multi(5,6)])
.then(res=>console.log(res))
.catch(e=>console.log(e))
