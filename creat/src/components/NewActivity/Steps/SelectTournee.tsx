import { Autocomplete, Box, Grid, InputLabel, TextField, Typography } from "@mui/material";
import { useAppSelector } from '../../../store/exploitReduxStore';
import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { selectTour } from "../../../store/tourSlice";
import InformationModal from "../../Template/InformationModal";

const info = { id: 1, msg: "Selection du code de tournée & de lot." };

interface SelectTourneeProps {
    codeTournee: string,
    onCodeTourneeInput: (codeTournee: string) => void,
    codeLot: string,
    onCodeLotInput: (codeLot: string) => void
};

function SelectTournee(
    {
        codeTournee,
        codeLot,
        onCodeTourneeInput,
        onCodeLotInput
    }: SelectTourneeProps) : JSX.Element {

    const tour = useAppSelector(selectTour);

    const tourCodes: string[] = tour.map<string>((code) => {
        return code.code_tournee;
    }).sort();

    const handleSetCodeTournee = (evt: ChangeEvent<HTMLInputElement>) => {
        onCodeTourneeInput(evt.target.value);
    };

    const handleSetCodeLot = (evt: ChangeEvent<HTMLInputElement>) => {
        onCodeLotInput(evt.target.value);
    };

    const handleAutoComplete = (evt: any) => {
        onCodeTourneeInput(tourCodes[+evt.target.dataset.optionIndex]);
    };

    useEffect(() => {
        console.log(codeTournee);
    }, [codeTournee]);
    
    return (
        <Fragment>
            <InformationModal {...info}/>
            <Grid container justifyContent={"center"}>
                <Box sx={{ display: 'grid', mt: 5 }}>
                    <InputLabel sx={{ color: 'grey.800', fontSize: '13px' }} id="code-tournee" variant="standard">CODE TOURNÉE :</InputLabel>
                    <Autocomplete sx={{ width: 250, color: 'black', bgcolor: "grey" }}
                        disablePortal
                        onInputChange={ handleAutoComplete }
                        id="code-tournee"
                        options={tourCodes}
                        getOptionLabel={option => option}
                        renderInput={(params) => <TextField sx={{ boxShadow: "2", bgcolor: "grey.200", 
                            borderRadius: 3, border: "White", input: { color: "black"}}} 
                            {...params} value={codeTournee} onChange={handleSetCodeTournee}/>}
                    />                    
                    <br />
                    <Typography variant="overline" display="block" >Code du lot :</Typography>
                    <TextField defaultValue={codeLot} sx={{ boxShadow: 1, input: { color: 'blue' } }} onChange={handleSetCodeLot} type="string"/>
                    <br />
                </Box>
            </Grid>
        </Fragment>
    );
}

export default SelectTournee;