const express = require ('express')
const cors= require('cors');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;


const app = express ()
app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://bappeeDb:gkfC5pCOTjalHiks@cluster0-4uwvr.mongodb.net/test?retryWrites=true&w=majority";
let client = new MongoClient(uri, { useNewUrlParser: true });

//nabazar order form
app.post('/orderPlaced',(req,res)=>{
  const orderedMan = req.body;
  orderedMan.orderTime= new Date();
  console.log(orderedMan);
  
  client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("Nbazar").collection("orders");
    collection.insertOne(orderedMan,(err,result)=>{
       if(err){
           console.log(err)
       }
       else{
        res.send(result.ops[0]);

       }
            
   })
   client.close();
  });
   
})


app.listen(3001 ,()=> console.log('Listening to port 3001'))