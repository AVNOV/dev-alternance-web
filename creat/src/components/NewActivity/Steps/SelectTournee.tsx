import { Autocomplete, Box, Grid, InputLabel, TextField, Typography } from "@mui/material";
import { useAppSelector } from '../../../store/exploitReduxStore';
import { ChangeEvent, Fragment } from "react";
import { selectTour } from "../../../store/tourSlice";
import InformationModal from "../../Template/InformationModal";

const info = { id: 1, msg: "Selection du code de tournée & de lot." };

interface SelectTourneeProps {
    selectedCodetournee: string,
    onCodeTourneeSelect: (selectedCodeTournee: string) => void,
    codeTournee: string,
    onCodeTourneeInput: (codeTournee: string) => void,
    codeLot: string,
    onCodeLotInput: (codeLot: string) => void
};

function SelectTournee(
    {
        selectedCodetournee,
        codeTournee,
        codeLot,
        onCodeTourneeSelect,
        onCodeTourneeInput,
        onCodeLotInput
    }: SelectTourneeProps) : JSX.Element {

    const tour = useAppSelector(selectTour);

    const tourCode = tour.map<{value: number, label: string}>((code) => {
        return {value: code.lot_id, label: code.code_tournee};
    });

    const handleSetCodeTournee = (evt: ChangeEvent<HTMLInputElement>) => {
        onCodeTourneeInput(evt.target.value);
        onCodeTourneeSelect(evt.target.value);
        console.log(evt.target.value);
    };

    const handleSetCodeLot = (evt: ChangeEvent<HTMLInputElement>) => {
        onCodeLotInput(evt.target.value);
    };

    console.log(tour);
    console.log(tourCode);
    
    return (
        <Fragment>
            <InformationModal {...info}/>
            <Grid container justifyContent={"center"}>
                <Box sx={{ display: 'grid', mt: 5 }}>
                    <InputLabel sx={{ color: 'grey.800', fontSize: '13px' }} id="demo-simple-select-label" variant="standard">CODE TOURNÉE :</InputLabel>
                    <Autocomplete sx={{ width: 250, color: 'black', bgcolor: "grey" }}
                        disablePortal
                        id="demo-simple-select"
                        options={tourCode}
                        renderInput={(params) => <TextField sx={{ boxShadow: "2", bgcolor: "grey.200", 
                            borderRadius: 3, border: "White", input: { color: "black"}}} 
                            {...params} value={selectedCodetournee} onChange={handleSetCodeTournee}/>}
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