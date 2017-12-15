var sql=require('mssql')
var setting=require('./setting')
const pool=new sql.ConnectionPool(setting.config, err=>{
  pool.request().query('select * from Sinhvien', (err,result)=>{
     if(err) console.log(err);
     console.log(result);
  })
})
