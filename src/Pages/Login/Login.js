import { getAuth } from 'firebase/auth';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../UseFirebase/UseAuth';
import './Login.css'


const Login = () => {
    const auth = getAuth();
    const history= useNavigate();
    
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const{signInUsingGoogle} = useAuth();

    const handelGoogleLogin=()=>{
        signInUsingGoogle()
        .then(result=>{
            history.pushState(redirect_uri)
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
