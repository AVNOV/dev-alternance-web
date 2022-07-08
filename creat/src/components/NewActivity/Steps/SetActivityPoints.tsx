import { Box, Grid, TextField, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import * as React from 'react';
import InformationModal from "../../Template/InformationModal";
import { Item } from "./NewActiviteController";

const info = {id: 1, msg: "Saisie du nombre de points de livraison et du nombre de ramasse."};

interface SetActivityPointsProps {
    prevu: number,
    onPrevuInput: (prevu: number) => void,
    distri: number,
    onDistriInput: (distri: number) => void,
    avise: number,
    onAviseInput: (avise: number) => void,
    poste: number,
    onPosteInput: (poste: number) => void,
    relai: number,
    onRelaiInput: (relai: number) => void,
    refuse: number,
    onRefuseInput: (refuse: number) => void,
    autre: number,
    onAutreInput: (autre: number) => void,
    esd: number,
    onESDInput: (esd: number) => void,
    reguliere: number
    onReguliereInput: (reguliere: number) => void,
};

function SetActivityPoints(
    {
        prevu,
        distri,
        avise,
        poste,
        relai,
        refuse,
        autre,
        esd,
        reguliere,
        onPrevuInput,
        onDistriInput,
        onAviseInput,
        onPosteInput,
        onRelaiInput,
        onRefuseInput,
        onAutreInput,
        onESDInput,
        onReguliereInput
    }: SetActivityPointsProps) : JSX.Element {

    let ttlPts: number = +prevu + +distri + +avise + +poste + +relai + +refuse + +autre;
    let ttlRms: number = +esd + +reguliere;

    const handleSetPrevu = (evt: ChangeEvent<HTMLInputElement>) => {
        onPrevuInput(+evt.target.value);
    }
    const handleSetDistri = (evt: ChangeEvent<HTMLInputElement>) => {
        onDistriInput(+evt.target.value);
    }
    const handleSetAvise = (evt: ChangeEvent<HTMLInputElement>) => {
        onAviseInput(+evt.target.value);
    }
    const handleSetPoste = (evt: ChangeEvent<HTMLInputElement>) => {
        onPosteInput(+evt.target.value);
    }
    const handleSetRelai = (evt: ChangeEvent<HTMLInputElement>) => {
        onRelaiInput(+evt.target.value);
    }
    const handleSetRefuse = (evt: ChangeEvent<HTMLInputElement>) => {
        onRefuseInput(+evt.target.value);
    }
    const handleSetAutre = (evt: ChangeEvent<HTMLInputElement>) => {
        onAutreInput(+evt.target.value);
    }
    const handleSetESD = (evt: ChangeEvent<HTMLInputElement>) => {
        onESDInput(+evt.target.value);
    }
    const handleSetReguliere = (evt: ChangeEvent<HTMLInputElement>) => {
        onReguliereInput(+evt.target.value);
    }

    return (
        <div>
            <Grid container justifyContent={"center"}>
                <InformationModal {...info}/>
                <Typography sx={{ ml: 4}} variant="overline" display="block" ><strong><u>Points</u> :</strong></Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: 600 }}>
                    <Item>
                        <Typography variant="overline" display="block" >Prévue</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={prevu} onChange={handleSetPrevu} type="number"/>
                    </Item>
                    <Item>
                        <Typography variant="overline" display="block" >Distri</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={distri} onChange={handleSetDistri} type="number"/>
                    </Item>
                    <Item>
                        <Typography variant="overline" display="block" >Avisé</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={avise} onChange={handleSetAvise} type="number"/>
                    </Item>
                    <Item>
                        <Typography variant="overline" display="block" >Poste</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={poste} onChange={handleSetPoste} type="number"/>
                    </Item>
                    <Item>
                        <Typography variant="overline" display="block" >Relai</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={relai} onChange={handleSetRelai} type="number"/>
                    </Item>
                    <Item>
                        <Typography variant="overline" display="block" >Refusé</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={refuse} onChange={handleSetRefuse} type="number"/>
                    </Item>
                    <Item>
                        <Typography variant="overline" display="block" >Autre</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={autre} onChange={handleSetAutre} type="number"/>
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
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={esd} onChange={handleSetESD} type="number"/>
                    </Item>
                    <Item>
                        <Typography variant="overline" display="block" >Regulière</Typography>
                        <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} value={reguliere} onChange={handleSetReguliere} type="number"/>
                    </Item>
                    <Item>
                        <Typography variant="overline" display="block" >total</Typography>
                        <Typography sx={{ fontSize: 10, color: "blue" }} variant="overline" display="block" >{ttlRms} pts</Typography>
                    </Item>
                </Box>
            </Grid>
        </div>
    );  
}

export default SetActivityPoints;