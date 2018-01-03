var express =require('express')
var app=express();
var db=require('./db/model');
app.use(express.static('public'));
app.set("view engine","ejs");
app.set("views","./views");
app.listen(3000,()=>{
  console.log("server is running");
})
app.get("/",(req,res)=>{
  res.render("index");
})
app.get("/StudentList",(req,res)=>{
    db.getData("select *from Sinhvien",(err,data)=>{
      if(err) console.log(err);
      res.render("list",{list: data});
    })
})
