import React from 'react';
import useFirebase from '../hooks/UseFirebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import app from '../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle, user]  = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(()=> {
            navigate(from, {replace: true})
        })
    }
    // const {signInWithGoogle} = useFirebase();

    return (
        <div>
            <h3>Please Login</h3>
            <div style={{margin: '20px'}}>
                <button onClick={handleGoogleSignIn}>Sign In With Google</button>
                
            </div>
            <form>
                <input type="email" name="" id="" placeholder='your email'/> <br />
                <input type="password" name="" id=""  placeholder='your password'/> <br />
                <input type="submit" value="Log in" />
            </form>
        </div>
    );
};

export default Login;