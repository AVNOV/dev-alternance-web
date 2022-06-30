import Box from '@mui/material/Box';
import { useAppSelector } from '../../../store/exploitReduxStore';
import { selectVehicules } from '../../../store/vehiculeSlice';
import { Grid, InputLabel, Autocomplete, TextField, Typography } from '@mui/material';
import InformationModal from '../../Template/InformationModal';
import { FetchData } from '../../FetchData';
import { ChangeEvent, Fragment } from 'react';

const info = { id: 1, msg: "Selection de son immatriculation et saisie du kilométrage." };

interface VehiculeActivityProps{
    immat: string,
    onImmatInput: (immat: string) => void,
    kmStart: string,
    onKmStartInput: (kmStart: string) => void,
    kmEnd: string
    onKmEndInput: (kmEnd: string) => void,
};

const VehiculeActivity = (
    {
        immat, 
        kmStart, 
        kmEnd, 
        onImmatInput, 
        onKmStartInput, 
        onKmEndInput
    }: VehiculeActivityProps) : JSX.Element =>  {

    const vehicule = useAppSelector(selectVehicules);

    const vehiculeImmat: string[] = vehicule.map<string>((camion) => {
        return camion.immatriculation;
    }).sort();

    const distance = +kmEnd - +kmStart;

    const handleSetImmat = (evt: ChangeEvent<HTMLInputElement>) => {
        onImmatInput(evt.target.value);
    }
    const handleSetKmStart = (evt: ChangeEvent<HTMLInputElement>) => {
        onKmStartInput(evt.target.value);
    };
    const handleSetKmEnd = (evt: ChangeEvent<HTMLInputElement>) => {
        onKmEndInput(evt.target.value);
    }

    return (
        <Fragment>
            <InformationModal {...info}/>
            <FetchData/>
            <Grid container justifyContent={"center"}>
                <Box sx={{ display: 'grid', mt: 5, borderRadius: 1 }}>
                <InputLabel sx={{ color: 'black' }} id="demo-simple-select-label">Immatriculation du vehicule :</InputLabel>
                    <Autocomplete sx={{ width: 250, color: 'black', bgcolor: "grey" }}
                        disablePortal
                        id="demo-simple-select"
                        options={vehiculeImmat}
                        renderInput={(params) => <TextField sx={{ boxShadow: "2", bgcolor: "grey.200", borderRadius: 3, border: "White", input: { color: "black"}}} {...params} value={vehiculeImmat} onChange={handleSetImmat}/>}
                    />
                </Box>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Box sx={{ display: 'grid', mt: 5 }}>
                        <Typography variant="overline" display="block" >Kilometrage Départ :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} value={kmStart} onChange={handleSetKmStart} type="number"/>
                        <br />
                        <Typography variant="overline" display="block" >Kilometrage arrivé :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} value={kmEnd} onChange={handleSetKmEnd} type="number"/>
                        <br />
                        <Typography sx={{ fontSize: 10, color: "blue" }} variant="overline" display="block" >Vous avez parcouru {(distance<0) ? 0 : distance} km</Typography>
                </Box>
                </Grid>
        </Fragment>
    );
}

export default VehiculeActivity;