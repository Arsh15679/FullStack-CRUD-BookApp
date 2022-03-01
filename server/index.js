var express = require('express');
var bodyParser = require('body-parser');
const sql = require('./dbOperation');
var cors = require('cors');
var app = express();

app.listen(3001);
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use( (request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
console.log("Server Running");
app.post('/addParking',(req,res)=>{
        let data = {...req.body}
        
        sql.addParking(data).then(result =>{
            res.status(201).json(result);
        })
});

app.get('/getParking',(req,res)=>{
    sql.getParking().then((result)=>{
        res.json(result);
    })
});

app.delete('/deleteParking/:rnid',(req,res)=>{
    const id = req.params.rnid;
    sql.deleteParking(id).then((result)=>{
        res.status(201).json(result);
    })
});