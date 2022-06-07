import { Box, Button, Grid } from "@mui/material";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import InformationModal from "../Template/InformationModal";

const info = { id: 1, msg: "Cliquer sur le bouton 'NOUVELLE ACTIVITÉ' pour commencer la saisie." };

function NewActivity() {
    const navigate = useNavigate();

    const changeRoute = () => {
        let next = "/dailyActivity";
        navigate(next);
    };

    return (
        <Fragment>
            <InformationModal {...info}/>
            <Grid container justifyContent={"center"}>
                <Box sx={{ mt: 10 }}>
                    <Button color="primary" size="large" type="submit" variant="contained" onClick={changeRoute}>
                        Nouvelle activité
                    </Button>
                </Box>
            </Grid>
        </Fragment>
    );
}

export default NewActivity;