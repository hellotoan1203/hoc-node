var sql=require('mssql')
var setting=require('./setting')
sql.connect(setting.config).then(
  pool=>{
     return pool.request().query('select * from Sinhvien')
  }).then(rs=>{
      rs.recordset.forEach(sinhvien=>{
      console.log(sinhvien);//a note
    })
  }).catch(e=>{
    console.log(e);
  })
