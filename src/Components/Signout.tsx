import {FC} from 'react';
import { userAuth } from '../firebase-config';
import { button_hover } from '../motion-variants';
import {motion} from 'framer-motion';
import {signOut} from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Signout:FC = () => {
    const userSignOut = () => {
        signOut(userAuth);
    }
    return (
        <div>
            <motion.button variants = {button_hover} animate = 'initial' whileHover = 'hover' whileFocus = 'hover' whileTap = 'click' onClick = {userSignOut} className = 'button'>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </motion.button>
        </div>
    )
}

export default Signout;