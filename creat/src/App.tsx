import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from "react-redux";
import { store } from "./store/exploitReduxStore";
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import Profile from './components/Login/Profile';
import { useAuth0 } from '@auth0/auth0-react'
import ClippedDrawer from './components/Template/ClippedDrawer';
import MiniDrawer from './components/Template/ModularClippedDrawer';
import LoadingSpinner from './components/Spinner/LoadingSpinner';

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
            <Route path='/login' element={<><Login /><Logout /><Profile /></>} /> 
            <Route path="/clipped" element={<><ClippedDrawer /></>} />
			<Route path="/mini" element={<><MiniDrawer /></>} />
          </Routes>
          </Router>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
