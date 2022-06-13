import { Box, Grid, TextField, Typography } from "@mui/material";
import { SetStateAction, SyntheticEvent } from "react";
import InformationModal from "../Template/InformationModal";
import './Activite.css';

type ActiviteJourProps = {
    hourStart: string,
    setHourStart: (hourStart: string) => void,
    hourEnd: string,
    setHourEnd: (hourEnd: string) => void,
    breakTime: string
    setBreakTime: (breakTime: string) => void,
};

// const setHourStart = ({ hourStart, setHourStart }: ActiviteJourProps): JSX.Element => {
//     return (
//         <div>
//             <input
//                 type="text"
//                 value={hourStart}
//                 onChange={(e) => setHourStart(e.currentTarget.value)}
//             />
//         </div>
//     );
// };

const ActiviteJour = (props: any) => {
    const info = { id: 1, msg: "Ici saisissez vos horaires." };

    const handleStartInput = (evt: any) => {
        props.onStartInput(evt.target.value);
    };
    const handleEndInput = (evt: any) => {
        props.onEndInput(evt.target.value);
    };
    const handleBreakInput = (evt: any) => {
        props.onBreakInput(evt.target.value);
    };

    return (
        <div>
            <InformationModal {...info}/>
            <Grid container justifyContent={"center"}>
                <Box sx={{ display: 'grid', mt: 5 }}>
                    <Typography variant="overline" display="block" >Heure d'embauche :</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} onChange={handleStartInput} type="time"/>
                    <br />
                    <Typography variant="overline" display="block" >Heure de débauche :</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} onChange={handleEndInput} type="time"/>
                    <br />
                    <Typography color={"red"} variant="overline" display="block" >Temps de pause :</Typography>
                    <TextField  sx={{ boxShadow: 1, input: { color: 'orange' } }} onChange={handleBreakInput} type="number"/>
                </Box>
            </Grid>
        </div>
    );
}

export default ActiviteJour;