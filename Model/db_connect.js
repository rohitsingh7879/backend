var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password : '',
    database :'ecommerce',
    port:3306
 
})
connection.connect((err)=>{
    if(err)
    console.log(" not connected",err)
    else
    console.log("connected")
})

module.exports=connection    