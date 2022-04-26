import {FC, useContext} from 'react';
import UserContext from '../UserContext';
import Tooltip from './Tooltip';
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';

interface ChatMessageProps {
    key: string,
    text: string,
    uid: string,
    photoURL: string,
    sender: string,
    createdAt: number,
    tooltipKey: string
}

const ChatMessage:FC<ChatMessageProps> = ({text, uid, photoURL, sender, createdAt, tooltipKey}) => {
    const {user} = useContext(UserContext);

    const msgClass = (!!user && user?.uid === uid)? 'sent':'received';
    const setDefaultPfp = (e:any) => {
        e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg';
    }
    return (
        <div className = {`message ${msgClass}`}>
            <Tippy content = {<Tooltip sender = {sender} date={new Date(createdAt)}/>}>
            <img data-tip data-for = {tooltipKey} src = {photoURL} alt = 'profile' onError = {setDefaultPfp}/>
            </Tippy>
            <p>{text}</p>
        </div>
    )
}

export default ChatMessage;