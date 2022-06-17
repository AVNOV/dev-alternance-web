import Box from '@mui/material/Box';
import { useAppSelector } from '../../../store/exploitReduxStore';
import { selectVehicules } from '../../../store/vehiculeSlice';
import { Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import InformationModal from '../../Template/InformationModal';
import { FetchData } from '../../FetchData';
import { ChangeEvent, Fragment } from 'react';

interface VehiculeActivityProps {
    immat: string,
    onImmatInput: (immat: string) => void,
    kmStart: string,
    onKmStartInput: (kmStart: string) => void,
    kmEnd: string
    onKmEndInput: (kmEnd: string) => void,
};

const info = { id: 1, msg: "Selection de son immatriculation et saisie du kilométrage." };

const VehiculeActivity = (props: VehiculeActivityProps) => {
    const vehicule = useAppSelector(selectVehicules);


    const vehiculeImmat: string[] = vehicule.map<string>((camion) => {
        return camion.immatriculation;
    });

    let ttl = +props.kmEnd - +props.kmStart;

    if (+props.kmEnd < +props.kmStart) {
        ttl = 0;
    }

    const handleSetImmat = (evt: SelectChangeEvent<string>) => {
        props.onImmatInput(evt.target.value);
    }
    const handleSetKmStart = (evt: ChangeEvent<HTMLInputElement>) => {
        props.onKmStartInput(evt.target.value);
    };
    const handleSetKmEnd = (evt: ChangeEvent<HTMLInputElement>) => {
        props.onKmEndInput(evt.target.value);
    }

    return (
        <Fragment>
            <InformationModal {...info}/>
            <FetchData/>
            <Grid container justifyContent={"center"}>
                <Box sx={{ display: 'grid', mt: 5, borderRadius: 1 }}>
                <InputLabel sx={{color: 'black'}} id="demo-simple-select-label">Immatriculation du vehicule :</InputLabel>
                    <Select sx={{ width: 250, border: '1px solid black', color: 'black'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue={props.immat}
                        label='Immat'
                        onChange={handleSetImmat}
                    >
                        {(vehiculeImmat).map((plaque: string, key: number ) => {
                            return (
                                <MenuItem key={key} value={plaque}> {plaque} </MenuItem>
                            );
                        })}
                    </Select>
                </Box>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Box sx={{ display: 'grid', mt: 5 }}>
                        <Typography variant="overline" display="block" >Kilometrage Départ :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} defaultValue={props.kmStart} onChange={handleSetKmStart} type="number"/>
                        <br />
                        <Typography variant="overline" display="block" >Kilometrage arrivé :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} defaultValue={props.kmEnd} onChange={handleSetKmEnd} type="number"/>
                        <br />
                        {/*<Typography sx={{ fontSize: 10, color: "blue" }} variant="overline" display="block" >Vous avez parcouru {ttl} km</Typography>*/}
                </Box>
                </Grid>
        </Fragment>
    );
}

export default VehiculeActivity;