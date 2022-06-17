import { ThemeProvider } from '@mui/material/styles';
import { Provider } from "react-redux";
import { store } from "./store/exploitReduxStore";
import { useAuth0 } from '@auth0/auth0-react'
import LoadingSpinner from './components/Spinner/LoadingSpinner';
import AppRouter from './components/AppRouter';
import darkTheme from './Style/MaterialTheme';

function App() {
//  	const { isLoading } = useAuth0(); 
//    if (isLoading) return (<div className='loading'><LoadingSpinner /></div>);

    return (
          <ThemeProvider theme={darkTheme}>
                <Provider store={store}>
                    <AppRouter />
                </Provider>
            </ThemeProvider>
    );
}

export default App;
