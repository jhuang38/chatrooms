const button_hover = {
    initial: {
        color: '#000000',
        backgroundColor: '#FF008E'
    },
    hover: {
        scale: 1.05,
        color: '#FF008E',
        backgroundColor: '#000000',
        transition: {
            duration: 0.1,
            ease: 'linear'
        }
    },
    click: {
        scale: 0.90,
        color: '#FF008E',
        backgroundColor: '#000000',
        transition: {
            duration: 0.1,
            ease: 'linear'
        } 
    }
}

// page transition not working for whatever reason?
const page_transition = {
    initial: {
        x: '-100vw',
        opacity: 0,
    },
    animate: {
        //x: 0,
        x:'0',
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.2,
            type: 'spring', 
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        x: '100vw',
        opacity: 0,
    },
}

export {button_hover, page_transition};