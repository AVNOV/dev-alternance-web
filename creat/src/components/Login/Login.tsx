import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { useAuth0 } from '@auth0/auth0-react';

//const theme = createTheme();

function Login() : any {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
    <Button 
      variant="contained"
      sx={{ mt: 3, mb: 2, mg:4, bgcolor: 'green' }}
      onClick={() => loginWithRedirect()}>
      Log In
    </Button>
    )
  );
}

export default Login;
