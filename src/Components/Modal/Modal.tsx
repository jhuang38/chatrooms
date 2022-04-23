import {FC} from 'react';
import Backdrop from './Backdrop';
import {motion} from 'framer-motion';

interface ModalProps {
    children: any,
    handleClose: Function
}

const Modal:FC<ModalProps> = ({children, handleClose}) => {
    const onModalClick = (e:any) => {
        e.stopPropagation();
    }
    return (
        <Backdrop onClick = {handleClose}>
            <motion.div onClick = {onModalClick} 
            initial = {{y: '-100vh', opacity: 0}} 
            animate = {{y:'0', opacity: 1, 
            transition: {duration: 0.15, type: 'spring', damping: 25, stiffness: 500}
            }} 
            exit = {{y: '100vh', opacity: 0}}
            className = 'modal card'>
                {children}
            </motion.div>
        </Backdrop>
    )
}

export default Modal;