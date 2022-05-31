import { Box, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NewActivity() {
    const navigate = useNavigate();

    const changeRoute = () => {
        let next = "/dailyActivity";
        navigate(next);
    };

    return (
        <div>
            <Grid container justifyContent={"center"}>
                <Box sx={{ mt: 10 }}>
                    <Button color="primary" size="large" type="submit" variant="contained" onClick={changeRoute}>
                        Nouvelle activité
                    </Button>
                </Box>
            </Grid>
    </div>
    );
}

export default NewActivity;