import { Box, Grid, TextField, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import InformationModal from "../../Template/InformationModal";
import '../Activite.css';

interface ActiviteJourProps {
    hourStart: string,
    onStartInput: (hourStart: string) => void,
    hourEnd: string,
    onEndInput: (hourEnd: string) => void,
    breakTime: string,
    onBreakInput: (breakTime: string) => void,
};

const ActiviteJour = (props: ActiviteJourProps) => {
    const info = { id: 1, msg: "Ici saisissez vos horaires." };

    const handleStartInput = (evt: ChangeEvent<HTMLInputElement>) => {
        props.onStartInput(evt.target.value);
    };
    const handleEndInput = (evt: ChangeEvent<HTMLInputElement>) => {
        props.onEndInput(evt.target.value);
    };
    const handleBreakInput = (evt: ChangeEvent<HTMLInputElement>) => {
        props.onBreakInput(evt.target.value);
    };

    return (
        <div>
            <InformationModal {...info}/>
            <Grid container justifyContent={"center"}>
                <Box sx={{ display: 'grid', mt: 5 }}>
                    <Typography variant="overline" display="block" >Heure d'embauche :</Typography>
                    <TextField defaultValue={props.hourStart} sx={{ boxShadow: 1, input: { color: 'blue' } }} onChange={handleStartInput} type="time"/>
                    <br />
                    <Typography variant="overline" display="block" >Heure de débauche :</Typography>
                    <TextField defaultValue={props.hourEnd} sx={{ boxShadow: 1, input: { color: 'blue' } }} onChange={handleEndInput} type="time"/>
                    <br />
                    <Typography color={"red"} variant="overline" display="block" >Temps de pause :</Typography>
                    <TextField defaultValue={props.breakTime} sx={{ boxShadow: 1, input: { color: 'orange' } }} onChange={handleBreakInput} type="text"/>
                </Box>
            </Grid>
        </div>
    );
}

export default ActiviteJour;