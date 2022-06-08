import { Box, Grid, TextField, Typography } from "@mui/material";
import { Fragment, useState } from "react";
/*
import FooterNav from "../Template/Footer";


function SetActivityPoints() : JSX.Element {
    const [kmStart, setKmStart] = useState<string>('');
    const [kmEnd, setHourEnd] = useState<string>('');
    
    return (
        <Fragment>
            <Grid container justifyContent={"center"}>
                <Box sx={{ display: 'column', mt: 4, gridTemplateRows: 'repeat(5, 1fr)' }}>
                        <Typography variant="overline" display="block" >Prévue :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={kmStart} onChange={(e) => setKmStart(e.target.value)} type="number"/>
                        <br />
                        <Typography variant="overline" display="block" >Distri :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} value={kmEnd} onChange={(e) => setHourEnd(e.target.value)} type="number"/>
                        <br />
                        <Typography variant="overline" display="block" >Avisé :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} value={kmEnd} onChange={(e) => setHourEnd(e.target.value)} type="number"/>
                        <br />
                        <Typography variant="overline" display="block" >Poste :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} value={kmEnd} onChange={(e) => setHourEnd(e.target.value)} type="number"/>
                        <br />
                        <Typography variant="overline" display="block" >Relai :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} value={kmEnd} onChange={(e) => setHourEnd(e.target.value)} type="number"/>
                        <br />
                        <Typography variant="overline" display="block" >Refusé :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} value={kmEnd} onChange={(e) => setHourEnd(e.target.value)} type="number"/>
                        <br />
                        <Typography variant="overline" display="block" >Autre :</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' } }} value={kmEnd} onChange={(e) => setHourEnd(e.target.value)} type="number"/>
                        <br />
                </Box>
            </Grid>
        </Fragment>
    );
}

export default SetActivityPoints;
*/

import * as React from 'react';
import { BoxProps } from '@mui/material/Box';
import InformationModal from "../Template/InformationModal";

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: 'white',
        color: 'black',
        p: 1,
        m: 1,
        pl: 1,
        minWidth: 45,
        mr: 2,
        borderRadius: 2,
        fontSize: '0.750rem',
        fontWeight: '500',
        ...sx,
      }}
      {...other}
    />
  );
}

const info = {id: 1, msg: "Saisie du nombre de points de livraison et du nombre de ramasse."};

function SetActivityPoints() : JSX.Element {
    const [prevu, setPrevu] = useState<number>(0);
    const [distri, setDistri] = useState<number>(0);
    const [avise, setAvise] = useState<number>(0);
    const [poste, setPoste] = useState<number>(0);
    const [relai, setRelai] = useState<number>(0);
    const [refuse, setRefuse] = useState<number>(0);
    const [autre, setAutre] = useState<number>(0);
    const [esd, setESD] = useState<number>(0);
    const [reguliere, setReguliere] = useState<number>(0);

    let ttlPts: number = prevu + distri + avise + poste + relai + refuse + autre;
    let ttlRms: number = esd + reguliere;

    return (
        <Fragment>
            <InformationModal {...info}/>
            <Typography sx={{ ml: 4}} variant="overline" display="block" ><strong><u>Points</u> :</strong></Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: 600 }}>
                <Item>
                    <Typography variant="overline" display="block" >Prévue</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={prevu} onChange={(e) => setPrevu(+e.target.value)} type="number"/>
                </Item>
                <Item>
                    <Typography variant="overline" display="block" >Distri</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={distri} onChange={(e) => setDistri(+e.target.value)} type="number"/>
                </Item>
                <Item>
                    <Typography variant="overline" display="block" >Avisé</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={avise} onChange={(e) => setAvise(+e.target.value)} type="number"/>
                </Item>
                <Item>
                    <Typography variant="overline" display="block" >Poste</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={poste} onChange={(e) => setPoste(+e.target.value)} type="number"/>
                </Item>
                <Item>
                    <Typography variant="overline" display="block" >Relai</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={relai} onChange={(e) => setRelai(+e.target.value)} type="number"/>
                </Item>
                <Item>
                    <Typography variant="overline" display="block" >Refusé</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={refuse} onChange={(e) => setRefuse(+e.target.value)} type="number"/>
                </Item>
                <Item>
                    <Typography variant="overline" display="block" >Autre</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={autre} onChange={(e) => setAutre(+e.target.value)} type="number"/>
                </Item>
                <Item>
                    <Typography variant="overline" display="block" >total</Typography>
                    <Typography sx={{ fontSize: 10, color: "blue" }} variant="overline" display="block" >{ttlPts} pts</Typography>
                </Item>
            </Box>
            <br />
                <Typography sx={{ ml: 4}} variant="overline" display="block" ><strong><u>Ramasse</u> :</strong></Typography>
                
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: 600 }}>
                <Item>
                    <Typography variant="overline" display="block" >ESD</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={esd} onChange={(e) => setESD(+e.target.value)} type="number"/>
                </Item>
                <Item>
                    <Typography variant="overline" display="block" >Regulière</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={reguliere} onChange={(e) => setReguliere(+e.target.value)} type="number"/>
                </Item>
                <Item>
                    <Typography variant="overline" display="block" >total</Typography>
                    <Typography sx={{ fontSize: 10, color: "blue" }} variant="overline" display="block" >{ttlRms} pts</Typography>
                </Item>
            </Box>
        </Fragment>
    );  
}

export default SetActivityPoints;