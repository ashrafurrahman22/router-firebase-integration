import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hooks/UseFirebase';

const auth = getAuth(app);

const Home = () => {
    // const {user} = useFirebase();
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>this is home</h2>
            <h3>Current User: {user ? user?.displayName : 'Nobody is Here now'}</h3>
        </div>
    );
};

export default Home;