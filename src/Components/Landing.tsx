import {FC, useContext} from 'react';
import { UserContext } from '../UserContext';
import Signout from './Signout';

const Landing:FC = () => {
    const {user} = useContext(UserContext);
    return (
        <div className = 'landing-page'>
            <h1>Welcome {user.displayName}</h1>
            <img src = {user.photoURL} alt = 'profile'/>
            <Signout/>
        </div>
    )
}

export default Landing;