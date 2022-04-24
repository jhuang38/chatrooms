import {FC} from 'react';
import {motion} from 'framer-motion';
import {page_transition, button_hover} from '../motion-variants';
import {useParams, useNavigate} from'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ChatRoom:FC = () => {
    const {roomCode} = useParams();
    const navigate = useNavigate();
    const gotoLanding = () => {
        navigate('/home')
    }
    return (
        <motion.div variants = {page_transition} initial = 'initial' animate = 'animate' exit = 'exit' className = 'chatroom card'>
            <header>
                <div className = 'backarrow'>
                    <FontAwesomeIcon icon={faArrowLeft} onClick ={gotoLanding}/>
                </div>
                
                <h1>{roomCode}</h1>
            </header>
            <main className = 'chat-messages'></main>
            <form className = 'chat-form'>
                <input type="text" name="message"/>
                <motion.button variants = {button_hover} animate = 'initial' whileHover = 'hover' whileFocus = 'hover' whileTap = 'click' type = 'submit'><FontAwesomeIcon icon = {faPaperPlane}/></motion.button>
            </form>
        </motion.div>
    )
}

export default ChatRoom;