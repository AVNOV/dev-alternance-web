import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppSelector } from '../store/exploitReduxStore';
import { selectVehicules } from '../store/vehiculeSlice';
import { Button } from '@mui/material';

function SelectImmatriculation() {
    const vehicule = useAppSelector(selectVehicules);

    const vehiculeImmat = vehicule.map<string>((camion) => {
        return camion.immatriculation;
    });

    console.log(vehiculeImmat);

    return (
        <Box sx={{ minWidth: 120, maxWidth: 300, marginLeft: 70, minHeight: 50, maxHeight: 60, mb: 10 }}>
            <InputLabel id="select-label">Selectionne ton immatriculation :</InputLabel>
                <FormControl fullWidth>
                    <select id='template-select' placeholder='test'>
                    <option>**-***-**</option>
                    {vehiculeImmat.sort((a, b) => a > b ? 1 : -1).map(immats => <option key={immats} value={vehiculeImmat}>{immats}</option>)}
                </select>
                    <Button
                        variant="contained"
                        sx={{ mt: 1, bgcolor: 'lightgrey' }}
                    >ok</Button>
            </FormControl>
        </Box>
    );
}

export default SelectImmatriculation;