import React from 'react'
import { Button } from "@material-ui/core";
import "./Login.css";
import {auth, provider} from "../../firebase"

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider)
    .catch(error => alert(error.message))
  }
    return (
        <div className="login">
        <div className="login__logo">
         
           <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f7/WhatsApp_logo.svg"
            alt="discord logo"
          />
          
        </div>
        <Button type="submit" onClick={signIn}>
          Sign In
        </Button>
      </div>
    )
}

export default Login
