import "./Login.css";

import { useState } from "react";
import Button from '@mui/material/Button';


function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log(isLoggedIn);
    const fragment = isLoggedIn ? 
        (<div>Logout</div>)
        :
        (
            <>
                <Button color="primary">Hello</Button>
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