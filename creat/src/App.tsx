import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from "react-redux";
import { store } from "./store/exploitReduxStore";
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import Profile from './components/Login/Profile';
import { useAuth0 } from '@auth0/auth0-react'
import ModularClippedDrawer from './components/Template/ModularClippedDrawer';
import LoadingSpinner from './components/Spinner/LoadingSpinner';
import TableList from './components/TableLists';
import ActiviteJour from './components/SaisieActivite/ActiviteJour';

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
	    		            <Route path="/" element={<><ModularClippedDrawer /><TableList/></>} />
                            <Route path='/login' element={<><Login /><Logout /><Profile /></>} /> 
                        </Routes>
                        <Routes>
                            <Route path='/dailyActivity' element={<><ActiviteJour/></>} />
                            <Route path='/vehiculeActivity' element={<><ActiviteJour/></>} />
                            <Route path='/selectActivity' element={<><ActiviteJour/></>} />
                            <Route path='/setActivityPoints' element={<><ActiviteJour/></>} />
                            {/* Choix 1: Faire une modal de recapitulatif de saisie d'activité */}
                            {/* choix 2: Faire une route spéciale pour le récapitulatif "/recap" */}
                            <Route path='/recap' element={<><ActiviteJour/></>} />
                        </Routes>
                    </Router>
                </Provider>
            </ThemeProvider>
        </>
    );
}

export default App;
