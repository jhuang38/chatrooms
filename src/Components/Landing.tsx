import {FC, useContext, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import { button_hover, page_transition } from '../motion-variants';
import UserContext from '../UserContext';
import forum_icon from '../assets/forum_icon.svg';
import Signout from './Signout';
import Modal from './Modal/Modal';
import RoomCodeInput from './RoomCodeInput';
import RoomContext from '../RoomContext';

const Landing:FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    const launchModal = () => modalOpen? close():open();

    const {roomCode} = useContext(RoomContext)
    const navigate = useNavigate();
    const openChatWindow = () => {
        close();
        navigate(`/room/${roomCode}`);
    }

    const {user} = useContext(UserContext);
    // any type is event type
    const setDefaultPfp = (e:any) => {
        e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg';
    }
    return (
        <motion.div variants = {page_transition} initial = 'initial' animate = 'animate' exit = 'exit' className = 'landing-page card'>
            <h1>{user.displayName}</h1>
            <img src = {user.photoURL} alt = 'profile' onError = {setDefaultPfp} className = 'pfp'/>
            <p>To get started, join an existing chat room or create a new one with a code! </p>
            <p>Messages stay in their respective chat rooms indefinitely. Be careful what you say!</p>
            <div className = 'button-container'>
                <motion.button variants = {button_hover} 
                animate = 'initial' 
                whileHover = 'hover' 
                whileFocus = 'hover' 
                whileTap = 'click'
                onClick = {launchModal}
                className = 'button'>Open Chat Room</motion.button>
                <Signout/>
            </div>
            <AnimatePresence exitBeforeEnter>
                {modalOpen && 
                <Modal handleClose = {close}>
                    <h1>Join a chat room</h1>
                    <img src = {forum_icon} alt = 'forum'/>
                    <p>Enter a room code to get started! All messages are contained to their own chat rooms.</p>
                    <p>For example, if you were in the "bob" chat room,
                        you would be able to see the most recent messages in the "bob" room but not the "foo" room.
                    </p>
                    <RoomCodeInput onFormSubmit={openChatWindow}/>
                </Modal>
                }
            </AnimatePresence>
            
        </motion.div>
        
    )
}

export default Landing;