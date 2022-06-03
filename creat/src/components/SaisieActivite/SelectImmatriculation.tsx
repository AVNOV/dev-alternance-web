import Box from '@mui/material/Box';
import { useAppSelector } from '../../store/exploitReduxStore';
import { selectVehicules } from '../../store/vehiculeSlice';
import { Grid, MenuItem, Select, Typography } from '@mui/material';
import { FetchData } from '../FetchData';
import InformationModal from '../Template/InformationModal';

function SelectImmatriculation() : JSX.Element {
    const vehicule = useAppSelector(selectVehicules);

    const vehiculeImmat: string[] = vehicule.map<string>((camion) => {
        return camion.immatriculation;
    });

    const info = [
        { id: 1, msg: "Selection de son immatriculation et saisie du kilométrage." },
    ];


    return (
        <>
            <InformationModal {...info[0]}/>
            <FetchData/>
            <Grid container justifyContent={"center"}>
                <Box sx={{ display: 'grid', mt: 5, borderRadius: 1 }}>
                <Typography variant="overline" display="block" >Immatriculation du vehicule :</Typography>
                    <Select sx={{ width: 250, border: '1px solid black'}} value={vehiculeImmat} placeholder='opt'>
                        {(vehiculeImmat || []).map((option, key ) => {
                            return (
                                <MenuItem key={key} value={option} sx={{backgroundColor: 'black', color: 'yellow'}}>
                                    {option}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </Box>
            </Grid>
        </>
    );
}

export default SelectImmatriculation;