import { Button, Grid } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageNotFound from '../../Style/NotFound.png';

function NotFoundPage() : JSX.Element {
    const navigate = useNavigate();

    const handleRedirect = () => {
        let next = "/";
        navigate(next);
    };
    
    return ( 
        <div className='not-found'>
            <Grid container justifyContent={"center"}>
                <img src={PageNotFound} alt="Not Found 404 img"/>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Button color="success" size="medium" type="button" variant="contained" onClick={handleRedirect}>
                    Return to Home
                </Button>
            </Grid>
      </div>
    );
}
export default NotFoundPage;