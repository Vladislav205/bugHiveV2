import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const LogIn = () => {
    return ( 
        <div className="background__blur">
            
                <div className="logIn__container">
                    <div className="google__logIn"></div>
                    
                    <button><div className="google__logIn"></div></button>
                    <button><div className="facebook__logIn"></div></button>
                    <button><div className="microsoft__logIn"></div></button>
            
                    <button><div className="Continue"></div></button>
                    
                </div>

        </div>

     );
}
 
export default LogIn;