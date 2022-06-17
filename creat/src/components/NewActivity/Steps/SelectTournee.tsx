import { Box, Grid, TextField, Typography } from "@mui/material";
import { ChangeEvent, Fragment } from "react";
import InformationModal from "../../Template/InformationModal";

const info = { id: 1, msg: "Selection du code de tournée & de lot." };

interface SelectTourneeProps {
    codeTournee: string,
    onCodeTourneeInput: (codeTournee: string) => void,
    codeLot: string,
    onCodeLotInput: (codeLot: string) => void
};

function SelectTournee(props: SelectTourneeProps) : JSX.Element{

    const handleSetCodeTournee = (evt: ChangeEvent<HTMLInputElement>) => {
        props.onCodeTourneeInput(evt.target.value);
    };
    const handleSetCodeLot = (evt: ChangeEvent<HTMLInputElement>) => {
        props.onCodeLotInput(evt.target.value);
    };

    return (
        <Fragment>
            <InformationModal {...info}/>
            <Grid container justifyContent={"center"}>
                <Box sx={{ display: 'grid', mt: 5 }}>
                        <Typography variant="overline" display="block" >Code de Tournée :</Typography>
                        <TextField defaultValue={props.codeTournee} sx={{ boxShadow: 1, input: { color: 'blue' } }}  onChange={handleSetCodeTournee} type="string"/>
                        <br />
                        <Typography variant="overline" display="block" >Code du lot :</Typography>
                        <TextField defaultValue={props.codeLot} sx={{ boxShadow: 1, input: { color: 'blue' } }}  onChange={handleSetCodeLot} type="string"/>
                        <br />
                </Box>
            </Grid>
        </Fragment>
    );
}

export default SelectTournee;