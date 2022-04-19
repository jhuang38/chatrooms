import {FC, useContext} from 'react';
import {motion} from 'framer-motion';
import { button_hover } from '../motion-variants';
import { UserContext } from '../UserContext';
import profile_picture from '../assets/default_profile.svg';
import Signout from './Signout';

const Landing:FC = () => {
    const {user} = useContext(UserContext);
    // any type is event type
    const setDefaultPfp = (e:any) => {
        e.target.src = profile_picture;
    }
    return (
        <div className = 'landing-page card'>
            <h1>{user.displayName}</h1>
            <img src = {user.photoURL} alt = 'profile' onError = {setDefaultPfp}/>
            <p>To get started, join an existing chat room or create a new one with a code! </p>
            <p>All messages will be deleted after 2 hours.</p>
            <div className = 'button-container'>
                <motion.button variants = {button_hover} animate = 'initial' whileHover = 'hover' whileFocus = 'hover' className = 'button'>Open Chat Room</motion.button>
                <Signout/>
            </div>
        </div>
    )
}

export default Landing;