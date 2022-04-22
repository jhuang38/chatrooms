import {FC, useRef} from 'react';
import {motion} from 'framer-motion';
import { button_hover } from '../motion-variants';

const RoomCodeInput:FC = () => {
    const codeRef = useRef<HTMLInputElement | null>(null);
    const formSubmit = (e:any) => {
        e.preventDefault();
        
        if (null !== codeRef.current) {
            console.log(codeRef.current.value)
        }
        
    }
    return (
        <form onSubmit = {formSubmit} className = 'code-input-form'>
            <input ref = {codeRef} type="text" placeholder = 'Room Code' name="room code"/>
            <motion.button variants = {button_hover} 
                animate = 'initial' 
                whileHover = 'hover' 
                whileFocus = 'hover' 
                whileTap = 'click' type = 'submit' className = 'button'>Chat!</motion.button>
        </form>
    )
}

export default RoomCodeInput;