import { Box, TextField, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import * as React from 'react';
import InformationModal from "../../Template/InformationModal";
import { Item } from "./NewActiviteController";

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

const info = {id: 1, msg: "Saisie du nombre de points de livraison et du nombre de ramasse."};

function SetActivityPoints(props: SetActivityPointsProps) : JSX.Element {
    let ttlPts: number = +props.prevu + +props.distri + +props.avise + +props.poste + +props.relai + +props.refuse + +props.autre;
    let ttlRms: number = +props.esd + +props.reguliere;

    const handleSetPrevu = (evt: ChangeEvent<HTMLInputElement>) => {
        props.onPrevuInput(+evt.target.value);
    }
    const handleSetDistri = (evt: ChangeEvent<HTMLInputElement>) => {
        props.onDistriInput(+evt.target.value);
    }
    const handleSetAvise = (evt: ChangeEvent<HTMLInputElement>) => {
        props.onAviseInput(+evt.target.value);
    }
    const handleSetPoste = (evt: ChangeEvent<HTMLInputElement>) => {
        props.onPosteInput(+evt.target.value);
    }
    const handleSetRelai = (evt: ChangeEvent<HTMLInputElement>) => {
        props.onRelaiInput(+evt.target.value);
    }
    const handleSetRefuse = (evt: ChangeEvent<HTMLInputElement>) => {
        props.onRefuseInput(+evt.target.value);
    }
    const handleSetAutre = (evt: ChangeEvent<HTMLInputElement>) => {
        props.onAutreInput(+evt.target.value);
    }
    const handleSetESD = (evt: ChangeEvent<HTMLInputElement>) => {
        props.onESDInput(+evt.target.value);
    }
    const handleSetReguliere = (evt: ChangeEvent<HTMLInputElement>) => {
        props.onReguliereInput(+evt.target.value);
    }

    return (
        <div>
            <InformationModal {...info}/>
            <Typography sx={{ ml: 4}} variant="overline" display="block" ><strong><u>Points</u> :</strong></Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: 600 }}>
                <Item>
                    <Typography variant="overline" display="block" >Prévue</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} defaultValue={props.prevu} onChange={handleSetPrevu} type="number"/>
                </Item>
                <Item>
                    <Typography variant="overline" display="block" >Distri</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} defaultValue={props.distri} onChange={handleSetDistri} type="number"/>
                </Item>
                <Item>
                    <Typography variant="overline" display="block" >Avisé</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} defaultValue={props.avise} onChange={handleSetAvise} type="number"/>
                </Item>
                <Item>
                    <Typography variant="overline" display="block" >Poste</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} defaultValue={props.poste} onChange={handleSetPoste} type="number"/>
                </Item>
                <Item>
                    <Typography variant="overline" display="block" >Relai</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} defaultValue={props.relai} onChange={handleSetRelai} type="number"/>
                </Item>
                <Item>
                    <Typography variant="overline" display="block" >Refusé</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} defaultValue={props.refuse} onChange={handleSetRefuse} type="number"/>
                </Item>
                <Item>
                    <Typography variant="overline" display="block" >Autre</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} defaultValue={props.autre} onChange={handleSetAutre} type="number"/>
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
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} defaultValue={props.esd} onChange={handleSetESD} type="number"/>
                </Item>
                <Item>
                    <Typography variant="overline" display="block" >Regulière</Typography>
                    <TextField sx={{ boxShadow: 1, input: { color: 'blue' }}} defaultValue={props.reguliere} onChange={handleSetReguliere} type="number"/>
                </Item>
                <Item>
                    <Typography variant="overline" display="block" >total</Typography>
                    <Typography sx={{ fontSize: 10, color: "blue" }} variant="overline" display="block" >{ttlRms} pts</Typography>
                </Item>
            </Box>
        </div>
    );  
}

export default SetActivityPoints;