import { FC } from "react"
import { motion } from "framer-motion"

// please replace this with actual types
interface BackdropProps {
    children?: any,
    onClick?: any
}

const Backdrop:FC<BackdropProps> = ({children, onClick}) => {
    return (
        <motion.div onClick = {onClick} initial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 0}} className = 'modal-backdrop'>
            {children}
        </motion.div>
    )
}

export default Backdrop;