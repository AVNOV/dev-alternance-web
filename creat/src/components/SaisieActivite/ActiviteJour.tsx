import { Box, Grid, TextField, Typography } from "@mui/material";
import { info } from "console";
import { useState } from "react";
import FooterNav from "../Template/Footer";
import InformationModal from "../Template/InformationModal";
import './Activite.css';

function ActiviteJour() : JSX.Element{
    const [hourStart, setHourStart] = useState<string>('');
    const [hourEnd, setHourEnd] = useState<string>('');
    const [breakTime, setBreakTime] = useState<string>('');

/*    
    const handlePrint = () => {
        console.log(hourStart);
    };
*/    
    const info = [
        { id: 1, msg: "Cette application vous permet de faire votre saisie d'activité. Les différentes pages l'outil vous accompagneront dans la rédaction de celle-ci. Ici saisissez vos horaires." },
    ];

    return (
        <div>
            <InformationModal {...info[0]}/>
            <Grid container justifyContent={"center"}>
                <Box sx={{ display: 'grid', mt: 5 }}>

                        <Typography variant="overline" display="block" >Heure d'embauche :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} value={hourStart} onChange={(e) => setHourStart(e.target.value)} type="time"/>
                        <br />
                        <Typography variant="overline" display="block" >Heure de débauche :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} value={hourEnd} onChange={(e) => setHourEnd(e.target.value)} type="time"/>
                        <br />
                        <Typography color={"red"} variant="overline" display="block" >Temps de pause :</Typography>
                        <TextField  sx={{ boxShadow: 1, input: { color: 'orange' } }} value={breakTime} onChange={(e) => setBreakTime(e.target.value)} type="number"/>
                </Box>
            </Grid>
            <div>
                <FooterNav />
            </div>
        </div>
    );
}

export default ActiviteJour;
            