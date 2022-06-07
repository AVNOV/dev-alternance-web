import { Box, Grid, TextField, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import FooterNav from "../Template/Footer";

function SetKilometrage() : JSX.Element {
    const [kmStart, setKmStart] = useState<string>('');
    const [kmEnd, setHourEnd] = useState<string>('');

    let start: number = +kmStart;
    let end: number = +kmEnd;

    let ttl = end - start;

    if (end < start) {
        ttl = 0;
    }

    return (
        <Fragment>
            <Grid container justifyContent={"center"}>
                <Box sx={{ display: 'grid', mt: 5 }}>
                        <Typography variant="overline" display="block" >Kilometrage Départ :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} value={kmStart} onChange={(e) => setKmStart(e.target.value)} type="number"/>
                        <br />
                        <Typography variant="overline" display="block" >Kilometrage arrivé :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} value={kmEnd} onChange={(e) => setHourEnd(e.target.value)} type="number"/>
                        <br />
                        <Typography sx={{ fontSize: 10, color: "blue" }} variant="overline" display="block" >Vous avez parcouru {ttl} km</Typography>
                </Box>
            </Grid>
        </Fragment>
    );
}

export default SetKilometrage;