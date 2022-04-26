import { createContext } from "react";

interface UserType {
    user?: {
        displayName: string | null,
        photoURL: string | null,
        uid: string | null
    } | null,
    loading?: boolean,
    error?: Error | null | undefined
};

const UserContext = createContext<UserType>({});

export default UserContext;