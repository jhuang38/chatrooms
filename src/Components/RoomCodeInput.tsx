import {FC, useContext, useEffect} from 'react';
import {motion} from 'framer-motion';
import { button_hover } from '../motion-variants';
import RoomContext from '../RoomContext';

interface RoomInputProps {
    onFormSubmit: Function
}
const RoomCodeInput:FC<RoomInputProps> = ({onFormSubmit}) => {
    const formChange = (e:any) => setRoomCode(e.target.value);

    const {roomCode, setRoomCode} = useContext(RoomContext);
    useEffect(() => setRoomCode('default'), [setRoomCode]);
    useEffect(() => {
        if (roomCode.length === 0) setRoomCode('default');
    }, [roomCode, setRoomCode])

    const formSubmit = (e:any) => {
        e.preventDefault();
        onFormSubmit();
    }
    return (
        <form onSubmit = {formSubmit} className = 'code-input-form'>
            <input onChange = {formChange} type="text" placeholder = 'Room Code' name="room code"/>
            <motion.button variants = {button_hover} 
                animate = 'initial' 
                whileHover = 'hover' 
                whileFocus = 'hover' 
                whileTap = 'click' type = 'submit' className = 'button'>Chat!</motion.button>
        </form>
    )
}

export default RoomCodeInput;