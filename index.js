const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const bodyparser = require('body-parser');
const mycon = require('mysql');

const app = express();
app.use(cors());
app.use(fileupload());
app.use(bodyparser.json());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

let c = mycon.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "Sandy@123",
    database : "dash"
})

c.connect(function(error){
    if(error){console.log(error);}
    else{console.log('MySQL Connected');}
})
app.post('/reg',(request,response)=>{

    let {firstname,lastname,email,phonenumber,password} = request.body;

    let sql = 'insert into students(firstname,lastname,email,phonenumber,password,status) values (?,?,?,?,?,?)';

    c.query(sql,[firstname,lastname,email,phonenumber,password,0],(error,result)=>{
        if(correct){
            let result = {"status":"correct"}
            response.send(result);
        }
        else{
            let result = {"status":"error"};
            response.send(result);
        }
    })
})
