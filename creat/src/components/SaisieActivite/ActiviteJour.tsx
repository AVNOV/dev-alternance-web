import { Label } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Grid, TextField, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { useAppSelector } from "../../store/exploitReduxStore";
import { selectVehiculeActivity } from "../../store/vehiculeActivitySlice";
import './Activite.css';

function ActiviteJour() : JSX.Element{
    const [hourStart, setHourStart] = useState<string>('');
    
    const handlePrint = () => {
        // eslint-disable-next-line no-restricted-globals
        console.log(hourStart);
    };


    
    return (
        <div>
            <Grid container justifyContent={"center"}>
                <Box sx={{ display: 'grid', mt: 5 }}>

                        <Typography variant="overline" display="block" >Heure d'embauche :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} value={hourStart} onChange={(e) => setHourStart(e.target.value)} type="time"/>
                        <br />
                        <Typography variant="overline" display="block" >Heure de débauche :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} type="time"/>
                        <br />
                        <Typography color={"red"} variant="overline" display="block" >Temps de pause :</Typography>
                        <TextField  sx={{ boxShadow: 1, input: { color: 'orange' } }} type="number"/>

                </Box>
            </Grid>
            <div>
                <ButtonGroup className="fullWidth" sx={{ position: "fixed", bottom: 0, border: '1px solid red' }} variant="contained" aria-label="text button group">
                    <div className="align-self-center">
                        <Button onClick={handlePrint}>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </div>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default ActiviteJour;
            