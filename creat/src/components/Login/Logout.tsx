import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

function Logout() : any {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <Button 
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: 'orange' }}
            onClick={() => logout()}> 
            Log Out
        </Button>
        )
    )
}

export default Logout;