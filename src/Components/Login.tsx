import {FC} from 'react';
import {userAuth, authProvider } from '../firebase-config';
import {signInWithPopup} from 'firebase/auth';
import {motion} from 'framer-motion';
import { button_hover } from '../motion-variants';
import chatIcon from '../assets/chat_icon.svg';

const Login:FC = () => {
    const googleSignIn = () => {
        signInWithPopup(userAuth, authProvider);
    }
    return (
        <div className = 'login-page'>
            <h1>ChatRooms</h1>
            <img src = {chatIcon} alt = 'icon' className = 'login-icon'/>
            <p>Create chat rooms and chat with others in real-time!</p>
            <motion.button variants = {button_hover} animate = 'initial' whileHover = 'hover' whileFocus = 'hover' onClick = {googleSignIn}>Login With Google</motion.button>
        </div>
    )
}

export default Login;