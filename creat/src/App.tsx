import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from "react-redux";
import { store } from "./store/exploitReduxStore";
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import Profile from './components/Login/Profile';
import { useAuth0 } from '@auth0/auth0-react'
import LoadingSpinner from './components/Spinner/LoadingSpinner';
import ActiviteJour from './components/SaisieActivite/ActiviteJour';
import Header from './components/Template/Header';
import SelectImmatriculation from './components/SelectImmatriculation';
import { FetchData } from './components/FetchData';
import NewActivity from './components/SaisieActivite/NewActivity';

function App() {
  
  	const { isLoading } = useAuth0(); 

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    if (isLoading) return (<div className='loading'><LoadingSpinner /></div>);

    return (
        <>
          <ThemeProvider theme={darkTheme}>
                <Provider store={store}>
                    <Router>
                        <Routes>
	    		            <Route path="/" element={<><Header/><NewActivity/></>} />
                            <Route path='/login' element={<><div><Login /></div><Logout /><Profile /></>} /> 
                        </Routes>
                        <Routes>
                            <Route path='/dailyActivity' element={<><Header/><ActiviteJour/></>} />
                            <Route path='/vehiculeActivity' element={<><Header/><ActiviteJour/></>} />
                            <Route path='/selectActivity' element={<><Header/><ActiviteJour/></>} />
                            <Route path='/setActivityPoints' element={<><Header/><ActiviteJour/></>} />
                            {/* Choix 1: Faire une modal de recapitulatif de saisie d'activité */}
                            {/* choix 2: Faire une route spéciale pour le récapitulatif "/recap" */}
                            <Route path='/recap' element={<><Header/><ActiviteJour/></>} />
                        </Routes>
                    </Router>
                </Provider>
            </ThemeProvider>
        </>
    );
}

export default App;
