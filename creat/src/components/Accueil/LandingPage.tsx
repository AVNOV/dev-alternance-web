import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InformationModal from "../Template/InformationModal";
import './LandingPage.css';

const info = { msg: "Cliquer sur le boutton 'NOUVELLE ACTIVITÉ' pour commencer la saisie." };
const LandingInfo = { msg: "Cette application est destinée aux chauffeurs et à leurs saisies d'activités. Cliquer sur le bouton 'Nouvelle Activité' lancera le processus de saisie. Lors de votre navigation parmis les différentes pages, vous pouvez à tout moment revenir en arrière et modifier les informations que vous avez rempli." };

function LandingPage() {
    const navigate = useNavigate();

    const handleNewActivity = () => {
        navigate("/new-activity");
    }

    return (
        <div className="landing-page">
            <InformationModal {...info}/>
            <Grid container justifyContent={"center"}>
                <Box sx={{ display: "grid", bgcolor: "grey.100", border: "2px solid grey", borderRadius: 1, pt: 5, pb: 5, pl: 8, pr: 8, mt: 3, minWidth: 135, maxWidth: 650 }}>
                    <div className="explain-app">
                        <Typography align="center" variant="body2" display="block" ><strong>{LandingInfo.msg}</strong></Typography>
                    </div>
                </Box>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Button sx={{mt: 5, border: "2px solid grey" }} variant= "contained" onClick={handleNewActivity} >Nouvelle activité</Button>
            </Grid>
        </div>
    );
}

export default LandingPage;