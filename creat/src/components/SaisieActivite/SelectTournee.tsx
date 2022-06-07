import { Box, Grid, TextField, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import InformationModal from "../Template/InformationModal";

const info = { id: 1, msg: "Selection du code de tournée & de lot." };

function SelectTournee() : JSX.Element{
    const [, setKmStart] = useState<string>('');
    const [kmEnd, setHourEnd] = useState<string>('');

    return (
        <Fragment>
            <InformationModal {...info}/>
            <Grid container justifyContent={"center"}>
                <Box sx={{ display: 'grid', mt: 5 }}>
                        <Typography variant="overline" display="block" >Code de Tournée :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} onChange={(e) => setKmStart(e.target.value)} type="string"/>
                        <br />
                        <Typography variant="overline" display="block" >Code du lot :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} value={kmEnd} onChange={(e) => setHourEnd(e.target.value)} type="string"/>
                        <br />
                </Box>
            </Grid>
        </Fragment>
    );
}

export default SelectTournee;