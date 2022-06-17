import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './404/NotFound';
import LandingPage from './Accueil/LandingPage';
import LoginPage from './Login/LoginPage';
import NewActivity from './NewActivity/NewActivity';
import Header from './Template/Header';

export default function AppRouter() : JSX.Element {
    return (
        <BrowserRouter>
            <div className="app-container" >
                <div>
                    <Header />
                </div>
                <div className="app-body">
                    <Routes>
                        <Route path='/login' element={<LoginPage/>} />
                        <Route path='/' element={<LandingPage/>} />

                        <Route path='/new-activity' element={<NewActivity/>} />

                        <Route path='/forbiddenAccess' element={<LoginPage/>} />
                        <Route path='/*' element={<NotFoundPage/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}