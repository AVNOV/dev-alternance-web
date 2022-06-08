import Box from '@mui/material/Box';
import { useAppSelector } from '../../store/exploitReduxStore';
import { selectVehicules } from '../../store/vehiculeSlice';
import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import InformationModal from '../Template/InformationModal';
import { FetchData } from '../FetchData';
import { Fragment, useState } from 'react';
import { JsxElement } from 'typescript';

function SelectImmatriculation() : JSX.Element {
    const vehicule = useAppSelector(selectVehicules);
    const [immat, setImmat] = useState('');

    const vehiculeImmat: string[] = vehicule.map<string>((camion) => {
        return camion.immatriculation;
    });

    const info = { id: 1, msg: "Selection de son immatriculation et saisie du kilométrage." };

    const handleChange = (event:  SelectChangeEvent) => {
        setImmat(event.target.value as string);
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
                        value={immat}
                        label='Immat'
                        onChange={handleChange}
                    >
                        {(vehiculeImmat).map((plaque: string, key: number ) => {
                            return (
                                <MenuItem key={key} value={plaque}> {plaque} </MenuItem>
                            );
                        })}
                    </Select>
                </Box>
            </Grid>
        </Fragment>
    );
}

export default SelectImmatriculation;