import { Box, Grid, TextField, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import InformationModal from "../../Template/InformationModal";
import '../Activite.css';

interface ActiviteJourProps {
    hourStart: string,
    onStartInput: (hourStart: string) => void,
    hourEnd: string,
    onEndInput: (hourEnd: string) => void,
    breakTime: number,
    onBreakInput: (breakTime: number) => void,
};

// Here is a function who compute userlist

const ActiviteJour = (
    {
        hourStart,
        hourEnd,
        breakTime,
        onStartInput,
        onEndInput,
        onBreakInput 
    }: ActiviteJourProps) => {
    const info = { id: 1, msg: "Ici saisissez vos horaires." };

    const handleStartInput = (evt: ChangeEvent<HTMLInputElement>) => {
        onStartInput(evt.target.value);
    };
    const handleEndInput = (evt: ChangeEvent<HTMLInputElement>) => {
        onEndInput(evt.target.value);
    };
    const handleBreakInput = (evt: ChangeEvent<HTMLInputElement>) => {
        onBreakInput(+evt.target.value);
    };

    return (
        <div>
            <InformationModal {...info}/>
            <Grid container justifyContent={"center"}>
                <Box sx={{ display: 'grid', mt: 5 }}>
                    <Typography variant="overline" display="block" >Heure d'embauche :</Typography>
                    <TextField value={hourStart} sx={{ boxShadow: 1, input: { color: 'blue' } }} onChange={handleStartInput} type="time"/>
                    <br />
                    <Typography variant="overline" display="block" >Heure de débauche :</Typography>
                    <TextField value={hourEnd} sx={{ boxShadow: 1, input: { color: 'blue' } }} onChange={handleEndInput} type="time"/>
                    <br />
                    <Typography color={"red"} variant="overline" display="block" >Temps de pause (mn) :</Typography>
                    <TextField value={breakTime} sx={{ boxShadow: 1, input: { color: 'orange' } }} onChange={handleBreakInput} type="number"/>
                    {/*<Typography sx={{mt: 5}} color={"orange"} variant="caption" display="block" >Vous avez travaillé {} mn</Typography>*/}
                </Box>
            </Grid>
        </div>
    );
}

export default ActiviteJour;