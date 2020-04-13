import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    return (
        <div>
            <h1>Join The Party !!!</h1>

            {
                auth.user ? <button onClick={auth.signOut}>Sign out</button> :
                <button onClick={auth.signInWithGoogle}>Sign in with Google</button>
            }
        </div>
    );
};

export default Login;