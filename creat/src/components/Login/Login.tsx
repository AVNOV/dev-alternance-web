import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase-config';
import { useAppDispatch, useAppSelector } from '../../store/exploitReduxStore';
import { useAuth0 } from '@auth0/auth0-react';

const theme = createTheme();

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
