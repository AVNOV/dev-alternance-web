const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all vehicules from vehicule
app.get("/getVehicule", (req,res) => {
    db.query("SELECT * FROM vehicule", (err, result) => {
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });
});

// Route to get one vehicule
app.get("/getVehiculeFromId/:id", (req,res) => {
    const id = req.params.id;
    db.query("SELECT * FROM vehicule WHERE vehicule_id = ?", id, (err,result) => {
        if(err) {
            console.log(err)
        }
        res.send(result)
    });
});

// Route for creating the vehicules
app.post('/createVehicule', (req, res) => {

    const immatriculation = req.body.immatriculation;
    const modele = req.body.modele;
    const marque = req.body.marque;

    db.query("INSERT INTO vehicule (modele, marque, immatriculation) VALUES (?,?,?)",[modele,marque,immatriculation], (err,result) => {
        if(err) {
            console.log(err)
        } 
        console.log(result)
    });   
})

// Route to delete a vehicule
app.delete('/delete/:id',(req,res) => {
    const id = req.params.id;

    db.query("DELETE FROM vehicule WHERE id= ?", id, (err,result) => {
        if(err) {
            console.log(err)
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})