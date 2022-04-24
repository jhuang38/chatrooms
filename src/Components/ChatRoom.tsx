import {FC, useContext, useRef, useState} from 'react';
import {motion} from 'framer-motion';
import {page_transition, button_hover} from '../motion-variants';
import {useParams, useNavigate} from'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { collection, orderBy, query, where, addDoc,serverTimestamp } from 'firebase/firestore';
import { fsInstance } from '../firebase-config';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import UserContext from '../UserContext';
import ChatMessage from './ChatMessage';

const ChatRoom:FC = () => {
    const messagesRef = collection(fsInstance, 'messages');

    const {user} = useContext(UserContext);
    
    const {roomCode} = useParams();
    const msgQuery = query(messagesRef, where("roomid", "==", `${roomCode}`), orderBy('createdAt'));
    const [messages, loading, error] = useCollectionData(msgQuery);

    const navigate = useNavigate();
    const gotoLanding = () => {
        navigate('/home')
    };

    const inputRef = useRef<HTMLInputElement>(null);
    const sendMessage = async (e:any) => {
        e.preventDefault();
        if (inputRef.current !== null && inputRef.current.value.length !== 0) {
            const {uid, photoURL } = user;
            await addDoc(messagesRef, {
                createdAt: serverTimestamp(),
                photoURL,
                roomid: roomCode,
                text: inputRef.current.value,
                uid
            })
            inputRef.current.value = '';
        }
    }
    return (
        <motion.div variants = {page_transition} initial = 'initial' animate = 'animate' exit = 'exit' className = 'chatroom card'>
            <header>
                <div className = 'backarrow'>
                    <FontAwesomeIcon icon={faArrowLeft} onClick ={gotoLanding}/>
                </div>
                
                <h1>{roomCode}</h1>
            </header>
            <main className = 'chat-messages'>
                {
                    messages && messages.map(msg => <ChatMessage key = {msg.id} text = {msg.text} uid = {msg.uid} photoURL = {msg.photoURL}/>)
                }

            </main>
            <form onSubmit = {sendMessage} className = 'chat-form'>
                <input ref = {inputRef} type="text" name="message"/>
                <motion.button variants = {button_hover} animate = 'initial' whileHover = 'hover' whileFocus = 'hover' whileTap = 'click' type = 'submit'><FontAwesomeIcon icon = {faPaperPlane}/></motion.button>
            </form>
        </motion.div>
    )
}

export default ChatRoom;