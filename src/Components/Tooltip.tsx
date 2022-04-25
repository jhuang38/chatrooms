import {FC} from 'react';

interface TooltipProps {
    sender: string,
    date?: Date
}
const Tooltip:FC<TooltipProps> = ({sender, date}) => {
    return (
        <aside className = 'tooltip'>
            <p>{sender}</p>
            <p>{date && `Sent at ${date.toLocaleString()}`}</p>
        </aside>
    )
}

export default Tooltip;
