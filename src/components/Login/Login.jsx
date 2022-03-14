import { useState } from "react";
import "./Login.css";

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log(isLoggedIn);
    const fragment = isLoggedIn ? 
        (<div>Logout</div>)
        :
        (
            <>
                <div className="login-btn">Login</div> 
                <div className="login-btn">Sign up</div> 
            </>            
        )
        
        
  return (
    <div className="login-wrapper">
        {fragment}
    </div>  
    
  )
}

export default Login