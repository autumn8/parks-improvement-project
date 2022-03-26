import "./Login.css";

import { useState } from "react";
import Button from '@mui/material/Button';
import { Link as RouterLink} from "react-router-dom";



function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const fragment = isLoggedIn ? 
        (<div>Logout</div>)
        :
        (
            <>                
                <Button color="primary" variant="outlined">Log in</Button>
                <Button color="primary" variant="outlined">Sign up</Button>                 
            </>            
        )
        
        
  return (
    <div className="login-wrapper">
        {fragment}
    </div>  
    
  )
}

export default Login