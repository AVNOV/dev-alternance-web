const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.get("/", (req,res)=>{

    db.connect(function(err){
        if (err) throw err;
        console.log("Connected !");
    })

    db.query("SELECT * FROM vehicule", (err,result)=>{
        if(err) {
            console.log(err);
        } 
        res.send(result)
    });
});

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})