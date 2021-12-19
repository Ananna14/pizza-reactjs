import { getAuth } from 'firebase/auth';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../UseFirebase/UseAuth';
import './Login.css';  


const Login = () => {
    const{signInWithGoogle} = useAuth();

    const location = useLocation();
    const navigate= useNavigate();

    const redirect_uri = location.state?.from || '/home';
  
    const handelGoogleLogin=()=>{
        // signInWithGoogle(location, navigate)
        signInWithGoogle()
        .then(result=>{
            navigate.push(redirect_uri)
        })
    }
    return (
        <div className='col-lg-12 col-12 log'>
           <h2><i class="fab fa-google"></i></h2>
           <button onClick={handelGoogleLogin} className='btn-color rounded-pill google'>Google Sign In</button>
        </div>
    )
}

export default Login
