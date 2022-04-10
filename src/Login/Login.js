import React from 'react';
import useFirebase from '../hooks/UseFirebase';

const Login = () => {

    const {signInWithGoogle} = useFirebase();

    return (
        <div>
            <h3>Please Login</h3>
            <div style={{margin: '20px'}}>
                <button onClick={signInWithGoogle}>Sign In With Google</button>
                
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