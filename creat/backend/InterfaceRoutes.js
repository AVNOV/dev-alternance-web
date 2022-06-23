const express = require('express');
const dbExploit = require('./config/dbExploit');
const cors = require('cors');

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// LOT ROUTES ---------------------------------------------------------------------------
// Route to get Tarification
app.get("/getTarification", (req,res) => {

    dbExploit.query("SELECT * FROM tarification", (err, result) => {
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });
});
// Route to get tarification by id
app.get("/getTarificationFromId/:id", (req, res) => {
    const tarif_id = req.body.tarif_id;

    dbExploit.query("SELECT * FROM tarification WHERE tarif_id = ?", tarif_id, (err,result) => {
        if(err) {
            console.log(err)
        }
        res.send(result)
    });
});
// Route to create a new tarification
app.post('/createTarification', (req) => {
    const tarif_id = req.body.tarif_id;
    const debut = req.body.debut;
    const fin = req.body.fin;
    const prevue = req.body.prevue;
    const distri = req.body.distri;
    const avise = req.body.avise;
    const poste = req.body.poste;
    const relai = req.body.relai;
    const refuse = req.body.refuse;
    const autre = req.body.autre;
    const esd = req.body.esd;
    const ramasse_reguliere = req.body.ramasse_reguliere;
    const km = req.body.km;

    dbExploit.query("INSERT INTO tarification (tarif_id, debut, fin, prevue, distri, avise, poste, relai, refuse, autre, esd, ramasse_reguliere, km) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)", [tarif_id, debut, fin, prevue, distri, avise, poste, relai, refuse, autre, esd, ramasse_reguliere, km], (err, result) => {
        if(err) {
            console.log(err)
        }
        console.log(result)
    });
});
// Route to delete tarification from id
app.delete('/deleteTarification/:id',(req,res) => {
    const tarif_id = req.params.tarif_id;

    dbExploit.query("DELETE FROM tarification WHERE tarif_id= ?", tarif_id, (err,result) => {
        if(err) {
            console.log(err)
        }
    })
})

// LOT ROUTES ---------------------------------------------------------------------------
// Route to get Lots
app.get("/getLots", (req,res) => {

    dbExploit.query("SELECT * FROM lots", (err, result) => {
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });
});
// Route to get lot from id
app.get("/getLotsFromId/:id", (req,res) => {
    const lot_id = req.params.lot_id;

    dbExploit.query("SELECT * FROM lots WHERE lot_id = ?", lot_id, (err,result) => {
        if(err) {
            console.log(err)
        }
        res.send(result)
    });
});
// Route to create new lot
app.post('/createLot', (req, res) => {
    const lot_id = req.body.lot_id;
    const nom_lot = req.body.nom_lot;
    const code_client = req.body.code_client;
    const code_interne = req.body.code_interne;
    const debut = req.body.debut;
    const fin = req.body.fin;
    const tarif_id = req.body.tarif_id;    

    dbExploit.query("INSERT INTO lots (lot_id, nom_lot, code_client, code_interne, debut, fin, tarif_id) VALUES (?,?,?,?,?,?,?)", [lot_id, nom_lot, code_client, code_interne, debut, fin, tarif_id], (err, result) => {
        if(err) {
            console.log(err)
        }
        console.log(result)
    });
});
// Route to delete lot from id
app.delete('/deleteLot/:id',(req,res) => {
    const lot_id = req.params.lot_id;

    dbExploit.query("DELETE FROM lots WHERE id= ?", lot_id, (err,result) => {
        if(err) {
            console.log(err)
        }
    })
})


// TOURNEE ROUTES -----------------------------------------------------------------------
// Route to get all Tournee
app.get("/getTournee", (req,res) => {

    dbExploit.query("SELECT * FROM tournee", (err, result) => {
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });
});
// Route to get tournee from id
app.get("/getTourneeFromId/:id", (req,res) => {
    const tournee_id = req.params.tournee_id;

    dbExploit.query("SELECT * FROM tournee WHERE tournee_id = ?", tournee_id, (err,result) => {
        if(err) {
            console.log(err)
        }
        res.send(result)
    });
});
// Route to post new tournee
app.post('/createTournee', (req) => {
    const tournee_id = req.body.tournee_id;
    const nom_tournee = req.body.nom_tournee;
    const code_tournee = req.body.code_tournee;
    const lot_id = req.body.lot_id;

    dbExploit.query("INSERT INTO tournee (tournee_id, nom_tournee, code_tournee, lot_id) VALUES (?,?,?,?)", [tournee_id, nom_tournee, code_tournee, lot_id], (err, result) => {
        if(err) {
            console.log(err)
        }
        console.log(result)
    });
});
app.delete('/deleteTournee/:id',(req,res) => {
    const tournee_id = req.params.tournee_id;

    dbExploit.query("DELETE FROM tournee WHERE id= ?", tournee_id, (err,result) => {
        if(err) {
            console.log(err)
        }
    })
})

// ACTIVITY ROUTES -----------------------------------------------------------------------
// Route to get activity
app.get("/getActivity", (req,res) => {

    dbExploit.query("SELECT * FROM activitee", (err, result) => {
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });
});
// Route to get activity from id
app.get("/getActivityFromId/:id", (req,res) => {
    const id = req.params.id;

    dbExploit.query("SELECT * FROM activitee WHERE activite_id = ?", id, (err,result) => {
        if(err) {
            console.log(err)
        }
        res.send(result)
    });
});
// Route to post new activity
app.post('/createActivity', (req) => {
    const activite_id = req.body.activite_id;
    const date_activite = req.body.date_activite;
    const prevue = req.body.prevue;
    const distri = req.body.distri;
    const avise = req.body.avise;
    const poste = req.body.poste;
    const relai = req.body.relai;
    const refuse = req.body.refuse;
    const autre = req.body.autre;
    const esd = req.body.esd;
    const ramasse_reguliere = req.body.ramasse_reguliere;
    const km = req.body.km;
    const tournee_id = req.body.tournee_id;

    dbExploit.query("INSERT INTO activitee (activite_id, date_activite, prevue, distri, avise, poste, relai, refuse, autre, esd, ramasse_reguliere, km, tournee_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)", [activite_id, date_activite, prevue, distri, avise, poste, relai, refuse, autre, esd, ramasse_reguliere, km, tournee_id], (err, result) => {
        if(err) {
            console.log(err)
        }
        console.log(result)
    });
});
// Route to delete activity
app.delete('/deleteActivity/:id',(req,res) => {
    const activite_id = req.params.activite_id;

    dbExploit.query("DELETE FROM activite WHERE id= ?", activite_id, (err,result) => {
        if(err) {
            console.log(err)
        }
    })
})

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
// Route to get daily activity from id
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
        if (err) {
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
        if (err) {
            console.log(err)
        } 
        console.log(result)
    });   
})
// Route to get all vehicule table immatriculation
app.get('/getImmat', (req, res) => {
    
    dbExploit.query("SELECT immatriculation FROM vehicule", (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    })
})
// Route to delete a vehicule
app.delete('/deleteVehicule/:id',(req,res) => {
    const id = req.params.id;

    dbExploit.query("DELETE FROM vehicule WHERE id= ?", id, (err,result) => {
        if (err) {
            console.log(err)
        }
    })
})



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
