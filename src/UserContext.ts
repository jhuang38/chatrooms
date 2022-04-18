import { createContext } from "react";

interface UserType {
    user?: any,
    loading?: boolean,
    error?: Error | null | undefined
};

export const UserContext = createContext<UserType>({});