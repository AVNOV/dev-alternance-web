import React, { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Grid, Typography } from "@mui/material";

function Profile() : any {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <Fragment>
                <Grid container >
                    <img src={user?.picture} alt={user?.name} />
                    <Fragment></Fragment>
                    <Typography variant={'h5'} component={'span'} sx={{ ml: 4}}>{user?.name} </Typography>
                </Grid>
                <br />
                <Typography variant={'body2'} component={'span'} sx={{ ml: 4}}>{user?.email} </Typography>
            </Fragment>
        )
    )
}

export default Profile;