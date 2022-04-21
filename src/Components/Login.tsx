import {FC} from 'react';
import {userAuth, authProvider } from '../firebase-config';
import {signInWithPopup} from 'firebase/auth';
import {motion} from 'framer-motion';
import { button_hover, page_transition } from '../motion-variants';
import chatIcon from '../assets/chat_icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Login:FC = () => {
    const googleSignIn = () => {
        signInWithPopup(userAuth, authProvider);
    }
    return (
        <motion.div variants = {page_transition} initial = 'initial' animate = 'animate' exit = 'exit' className = 'login-page card'>
            <h1>ChatRooms</h1>
            <img src = {chatIcon} alt = 'icon' className = 'login-icon'/>
            <p>Create chat rooms and chat with others in real-time!</p>
            <motion.button variants = {button_hover} animate = 'initial' whileHover = 'hover' whileFocus = 'hover' whileTap = 'click' onClick = {googleSignIn} className = 'button'>
                <FontAwesomeIcon icon={faArrowRightToBracket} />
            </motion.button>
        </motion.div>
    )
}

export default Login;