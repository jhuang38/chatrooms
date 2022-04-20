const button_hover = {
    initial: {
        color: '#000000',
        backgroundColor: '#FF008E'
    },
    hover: {
        color: '#FF008E',
        backgroundColor: '#000000',
        transition: {
            duration: 0.2,
            ease: 'linear'
        }
    }
}

// page transition not working for whatever reason?
const page_transition = {
    initial: {
        x: '-100vw',
        opacity: 0
    },
    animate: {
        //x: 0,
        x:0,
        opacity: 1,
        duration: 0.25
    },
    exit: {
        x: '100vw',
        opacity: 0,
    },
}

export {button_hover, page_transition};