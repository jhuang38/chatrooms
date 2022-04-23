import {createContext} from 'react';

interface RoomContextType {
    roomCode: string,
    setRoomCode: Function
}

const RoomContext = createContext<RoomContextType>({roomCode: '', setRoomCode: () => null});

export default RoomContext;