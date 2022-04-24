import {FC, useContext} from 'react';
import UserContext from '../UserContext';
import profile_picture from '../assets/default_profile.svg';

interface ChatMessageProps {
    text: string
    uid: string
    photoURL: string
}

const ChatMessage:FC<ChatMessageProps> = ({text, uid, photoURL}) => {
    const {user} = useContext(UserContext);
    const msgClass = (user.uid === uid)? 'sent':'received';
    const setDefaultPfp = (e:any) => {
        e.target.src = profile_picture;
    }
    return (
        <div 
        className = {`message ${msgClass}`}>
            <img src = {photoURL} alt = 'profile' onError = {setDefaultPfp} />
            <p >{text}</p>
        </div>
    )
}

export default ChatMessage;