import express from 'express'
const app = express()
const port = process.env.PORT ||'5000'
import userRoutes from './routes/userRoute.js'
// import customMysql from './Features/sqlFunctions.js'

import db from './config/db.js'



//testing
// customMysql.connect();


//db connection
// customMysql.dbMysql()


// db.connect()








//Routes
app.use('/api',userRoutes)



app.listen(port,()=>{
    console.log("Listenig at 5000 port");
}) 








//user data
// customMysql.fromTable('users').select(['name']);





// retrieve
// con.query("select * from abcd ",(err,result)=>{  
//     console.log("result",result)
// })






//sql joins ---inner joins














// let response   = mysql.userTable([ 'name', 'age']).from('users');


// table: messages
// column: is_seen

// message = '';
// message.is_seen = 1;

// message.markAsSeen();


// 'select name,age from tablename';

// const read = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
// import read from 'readline'createInterface({
//   input: process.stdin,
//       output: process.stdout
// })

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });



// rl.on("close",function(){
//   console.log("\nExecuted")
//   process.exit(0)
// })








//retrieve
// con.query("select * from formdata ",(err,result)=>{  
//     console.log("result",result)
// })

// con.query("select * from registration ",(err,result)=>{
//     console.log("result",result)
// })
// con.query("select * from login ",(err,result)=>{
//     console.log("result",result)
// })


//insert
// const sql = "INSERT INTO registration (fname,lname) VALUES ('ABC' , 'XYZ')"


// readline.question('Who are you?', name => {
//     console.log(`Hey there ${name}!`);
//     readline.close();
//   });








// rl.question("whats your name", function(name){
//   rl.question("where dou u live",function(country){
//     console.log(`${name},is a citizen of ${country}`)
//   })
// })


