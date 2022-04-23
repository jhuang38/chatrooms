import { createContext } from "react";

interface UserType {
    user?: any,
    loading?: boolean,
    error?: Error | null | undefined
};

const UserContext = createContext<UserType>({});

export default UserContext;