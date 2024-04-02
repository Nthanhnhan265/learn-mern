const express = require('express');
const app = express(); 
const path = require('path'); 
const pass= 'VffSNh4B8DOHJQ4F'; 
const { MongoClient, ObjectId } = require('mongodb');
const { error } = require('console');
const { connect } = require('http2');
//express 
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());

// Connection URL
const url = `mongodb+srv://ngthanhnhan265xb:${pass}@cluster0.ornwyo0.mongodb.net/`;
const client = new MongoClient(url);

// Database Name
const dbName = 'backenddb';
const colName ='user'; 

//get all users 
app.get('/api/user',async (req,res)=>{
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(colName);
        let result ; 
        result = await collection.find({}).toArray();        
        res.status(200).json(result);
    }catch(error) { 
        console.log(error)
    }
  client.close()
}); 

//get user by id 
app.get('/api/user/:id',async (req,res)=>{
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(colName);
        let result ; 
        if (!req.params.id) { 
            return res.status(200).json({mess:'no'});
        }
        result = await collection.find({_id: new ObjectId(req.params.id)}).toArray();        
        res.status(200).json(result);
    }catch(error) { 
        console.log(error)
    }
  client.close()
}); 
//create new user 
app.post('/api/user',async (req,res)=>{ 
    try {
        console.log(req.body); 
        await client.connect(); 
        const db = client.db(dbName);
        const col = db.collection(colName);
        const res = await col.insertOne(req.body); 
        console.log(res);
        client.close(); 
    } catch (error) {
        res.status(500).json({'massages':error.massages}); 
    }
}); 
//update an user by id 
app.put('/api/user/:id',async (req,res) => {
    try {
        await client.connect(); 
        const db = client.db(dbName);
        const col = db.collection(colName);
        let res; 
        if(req.body) { 
            res = await col.updateOne({_id: new ObjectId(strID)},{$set:req.body });
        }
        client.close(); 
        return res; 
    } catch (error) {
        res.statusCode(500).json({'messages':error.messages});
    }
}) 

//delele by id 
app.delete('api/user/:id',async(req,res)=> { 
    try {
        await client.connect(); 
        const db = client.db(dbName); 
        const col = db.collection(colName); 
        let res; 
        if (req.params.id) { 
            res = await col.deleteOne({"_id": new ObjectId(req.params.id)}); 
        }
        client.close(); 
    } catch (error) {
        res.status().json({mess: "mess"}); 
    }
})


app.listen(70,()=>{
    console.log('server is running on 70'); 
}); 