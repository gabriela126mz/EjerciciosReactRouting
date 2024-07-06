import {React} from "react";
import {useNavigate,useLocation} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";


const Login = () => {
    const {isAuthenticated,login,logout} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    
    const handleLogin = () =>{
        login();
        navigate(location.state.pathname);
    };

    return (
       <div>
            <h1>Login Page</h1>
            {isAuthenticated ? ( 
                <button onClick={logout}>Logout</button>
                ) : (
                <button onClick={handleLogin}>Login</button>
                )}
       </div>
    );
}

export default Login;
