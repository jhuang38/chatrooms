import {FC, useContext, useRef} from 'react';
import {motion} from 'framer-motion';
import {page_transition, button_hover} from '../motion-variants';
import {useParams, useNavigate} from'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { collection, orderBy, query, where, addDoc } from 'firebase/firestore';
import { fsInstance } from '../firebase-config';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import UserContext from '../UserContext';
import ChatMessage from './ChatMessage';
import uniqid from 'uniqid';

const ChatRoom:FC = () => {
    const messagesRef = collection(fsInstance, 'messages');

    const {user} = useContext(UserContext);
    
    const {roomCode} = useParams();
    const msgQuery = query(messagesRef, where("roomid", "==", `${roomCode}`), orderBy('createdAt'));
    const [messages] = useCollectionData(msgQuery);

    const navigate = useNavigate();
    const gotoLanding = () => {
        navigate('/home')
    };

    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const sendMessage = async (e:any) => {
        e.preventDefault();
        if (inputRef.current !== null && inputRef.current.value.length !== 0) {
            const {uid, photoURL, displayName } = user;
            await addDoc(messagesRef, {
                createdAt: Date.now(),
                photoURL,
                roomid: roomCode,
                text: inputRef.current.value,
                uid,
                sender: displayName
            })
            inputRef.current.value = '';
            scrollRef.current?.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <motion.div variants = {page_transition} initial = 'initial' animate = 'animate' exit = 'exit' className = 'chatroom card'>
            <header>
                <motion.div whileHover = {{scale: 1.05}} whileTap = {{scale: 0.9}} whileFocus = {{scale: 1.05}} className = 'backarrow'>
                    <FontAwesomeIcon icon={faArrowLeft} onClick ={gotoLanding}/>
                </motion.div>
                
                <h1>{roomCode}</h1>
            </header>
            <main className = 'chat-messages'>
                {
                    messages && messages.map(msg => <ChatMessage key = {uniqid()} text = {msg.text} uid = {msg.uid} photoURL = {msg.photoURL} sender = {msg.sender} createdAt = {msg.createdAt} tooltipKey={uniqid()}/>)
                }
                <div ref={scrollRef}/>

            </main>
            <form onSubmit = {sendMessage} className = 'chat-form'>
                <input ref = {inputRef} type="text" name="message"/>
                <motion.button variants = {button_hover} animate = 'initial' whileHover = 'hover' whileFocus = 'hover' whileTap = 'click' type = 'submit'><FontAwesomeIcon icon = {faPaperPlane}/></motion.button>
            </form>
        </motion.div>
    )
}

export default ChatRoom;