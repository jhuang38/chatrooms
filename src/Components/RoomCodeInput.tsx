import {FC, useRef} from 'react';

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
            <input ref = {codeRef} type="text" name="room code"/>
            <button type = 'submit'>Chat!</button>
        </form>
    )
}

export default RoomCodeInput;