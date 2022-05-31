import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty'
import { Grid, Typography } from "@mui/material";

function Profile() : any {
    const { user, isAuthenticated } = useAuth0();

    console.log(user?.name);
    return (
        isAuthenticated && (
            <div>
                <Grid container >
                    <img src={user?.picture} alt={user?.name} />
                    <div></div>
                    <Typography sx={{ ml: 4}} variant="h4">{user?.name} </Typography>
                </Grid>
                <p>{user?.email}</p>
            </div>
        )
    )
}

export default Profile;