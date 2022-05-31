import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useAppSelector } from '../store/exploitReduxStore';
import { selectVehicules } from '../store/vehiculeSlice';
import { Button, Grid } from '@mui/material';
import { FetchData } from './FetchData';

function SelectImmatriculation() {
    const vehicule = useAppSelector(selectVehicules);

    const vehiculeImmat = vehicule.map<string>((camion) => {
        return camion.immatriculation;
    });

    console.log(vehiculeImmat);

    const handleRedirect = () => {
        console.log("clic need redirect");
    }

    return (
        <Grid container justifyContent={"center"}>
            <Box>
                <FetchData/>
                <InputLabel id="select-label">Selectionne ton immatriculation :</InputLabel>
                    <FormControl fullWidth>
                        <select id='template-select'>
                        <option>
                            immatriculation **-***-**
                        </option>
                        {vehiculeImmat.sort((a, b) => a > b ? 1 : -1).map((immats, index) => <option key={index} value={vehiculeImmat}>{immats}</option>)}
                        </select>
                        <Button
                            variant="contained"
                            sx={{ mt: 1, bgcolor: 'lightgrey' }}
                            onClick={handleRedirect}
                        >ok</Button>
                </FormControl>
            </Box>
        </Grid>
    );
}

export default SelectImmatriculation;