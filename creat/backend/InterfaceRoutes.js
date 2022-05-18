const express = require('express');
const dbExploit = require('./config/dbExploit');
const dbAuth = require('./config/dbAuth');
const cors = require('cors');

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

/* ------------------------------------- DB AUTH ---------------------------------------- */
// LOGIN Route
app.post('/login', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
  });
// Route to get users
app.get("/getUser", (req,res) => {

    dbAuth.query("SELECT * FROM user", (err, result) => {
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });
});
// Route to get user from and id param
app.get("/getUserFromId/:id", (req,res) => {

    const id = req.params.id;

    dbAuth.query("SELECT * FROM user WHERE user_id = ?", id, (err,result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    });
});

// Route for creating a new user /register
app.post('/createUser', (req, res) => {

    const username = req.body.vehicule_activite_id;
    const pwd = req.body.heure_embauche;
    const group_id = req.body.heure_debauche;

    dbAuth.query("INSERT INTO user (username, pwd, group_id) VALUES (?,?,?)",[username, pwd, group_id], (err,result) => {
        if(err) {
            console.log(err)
        }
        console.log(result)
    });
})
// Route to delete a user from id param
app.delete('/deleteUser/:id',(req,res) => {

    const id = req.params.id;

    dbAuth.query("DELETE FROM user WHERE id= ?", id, (err,result) => {
        if(err) {
            console.log(err)
        }
    })
})
/* ------------------------------------ DB EXPLOIT -------------------------------------- */
// DAILY ACTIVITY ROUTES ----------------------------------------------------------------
// Route to get all daily activity
app.get("/getDailyActivity", (req,res) => {
    dbExploit.query("SELECT * FROM activite_jour", (err, result) => {
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });
});
// Route to get one daily activity
app.get("/getDailyActivityFromId/:id", (req,res) => {
    const id = req.params.id;
    dbExploit.query("SELECT * FROM activite_jour WHERE activite_jour_id = ?", id, (err,result) => {
        if(err) {
            console.log(err)
        }
        res.send(result)
    });
});
// Route for creating a daily activity
app.post('/createDailyActivity', (req, res) => {

    const vehicule_activite_id = req.body.vehicule_activite_id;
    const heure_embauche = req.body.heure_embauche;
    const heure_debauche = req.body.heure_debauche;
    const duree_pause = req.body.duree_pause;

    dbExploit.query("INSERT INTO activite_jour (vehicule_activite_id, heure_embauche, heure_debauche, duree_pause) VALUES (?,?,?,?)",[vehicule_activite_id, heure_embauche, heure_debauche, duree_pause], (err,result) => {
        if(err) {
            console.log(err)
        }
        console.log(result)
    });
})
// Route to delete a daily activity
app.delete('/deleteDailyActivity/:id',(req,res) => {

    const id = req.params.id;

    dbExploit.query("DELETE FROM activite_jour WHERE id= ?", id, (err,result) => {
        if(err) {
            console.log(err)
        }
    })
})

// VEHICULE ACTIVITY ROUTES -------------------------------------------------------------
app.get("/getVehiculesActivity", (req,res) => {

    dbExploit.query("SELECT * FROM vehicule_activite", (err, result) => {
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });
});
// Route to get one vehicule activity
app.get("/getVehiculeActivityFromId/:id", (req,res) => {

    const id = req.params.id;

    dbExploit.query("SELECT * FROM vehicule_activite WHERE vehicule_activite_id = ?", id, (err,result) => {
        if(err) {
            console.log(err)
        }
        res.send(result)
    });
});
// Route for creating a vehicule activity
app.post('/createVehiculeActivity', (req, res) => {

    const vehicule_id = req.body.vehicule_id;
    const km_depart = req.body.km_depart;
    const km_arrive = req.body.km_arrive;
    const km_jour = req.body.km_jour;

    dbExploit.query("INSERT INTO vehicule_activite (vehicule_id, km_depart, km_arrive, km_jour) VALUES (?,?,?,?)",[vehicule_id, km_depart, km_arrive, km_jour], (err,result) => {
        if(err) {
            console.log(err)
        }
        console.log(result)
    });   
})
// Route to delete a vehicule activity
app.delete('/deleteVehiculeActivity/:id',(req,res) => {

    const id = req.params.id;

    dbExploit.query("DELETE FROM vehicule_activite WHERE id= ?", id, (err,result) => {
        if(err) {
            console.log(err)
        }
    })
})

// VEHICULE TABLE ROUTES ----------------------------------------------------------------
// Route to get all vehicules from vehicule
app.get("/getVehicules", (req,res) => {

    dbExploit.query("SELECT * FROM vehicule", (err, result) => {
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });
});
// Route to get one vehicule
app.get("/getVehiculeFromId/:id", (req,res) => {

    const id = req.params.id;

    dbExploit.query("SELECT * FROM vehicule WHERE vehicule_id = ?", id, (err,result) => {
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

    dbExploit.query("INSERT INTO vehicule (modele, marque, immatriculation) VALUES (?,?,?)",[modele,marque,immatriculation], (err,result) => {
        if(err) {
            console.log(err)
        } 
        console.log(result)
    });   
})
// Route to delete a vehicule
app.delete('/deleteVehicule/:id',(req,res) => {

    const id = req.params.id;

    dbExploit.query("DELETE FROM vehicule WHERE id= ?", id, (err,result) => {
        if(err) {
            console.log(err)
        }
    })
})
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
