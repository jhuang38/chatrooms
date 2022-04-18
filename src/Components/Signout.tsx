import {FC} from 'react';
import { userAuth } from '../firebase-config';
import {signOut} from 'firebase/auth';

const Signout:FC = () => {
    const userSignOut = () => {
        signOut(userAuth);
    }
    return (
        <div>
            <button onClick = {userSignOut}>Sign Out</button>
        </div>
    )
}

export default Signout;