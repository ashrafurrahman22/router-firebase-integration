import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>this is products</h2>
            {
                user?.uid ? user.displayName : "Nobody is Here"
            }
        </div>
    );
};

export default Products;