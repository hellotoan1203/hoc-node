var sql=require('mssql');
var config={
  user: 'sa',
 password: 'sa',
 server: 'localhost',
 database:'QLSinhvien',
 port: 1433,
}
exports.getData=(query,callback)=>{sql.connect(config).then(
  pool=>{
    return pool.request().query(query)
  }
).then(rs=>{
  callback(null,rs.recordset);
}).catch(e=>{
  callback(e);
})
}
