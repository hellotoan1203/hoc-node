var con=require('./db/DBContext');
sql="select * from QLSinhvien"
con.executeSQL(sql,(rs,err)=>{
  if(err) console.log(err);
  console.log(rs);
})
