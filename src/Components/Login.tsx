import {FC} from 'react';
import {userAuth, authProvider } from '../firebase-config';
import {signInWithPopup} from 'firebase/auth';

const Login:FC = () => {
    const googleSignIn = () => {
        signInWithPopup(userAuth, authProvider);
    }
    return (
        <div>
            <button onClick = {googleSignIn}>Login With Google</button>
        </div>
    )
}

export default Login;