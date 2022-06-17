import Login from './Login';
import Logout from './Logout';

//const theme = createTheme();

function LoginPage() : any {
    return (
        <div className='login-page'>
            <Login/>
            <Logout />
        </div>
    );
}

export default LoginPage;