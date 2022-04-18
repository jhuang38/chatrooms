import { createContext } from "react";

type UserType = {
    user?: any,
    loading?: boolean,
    error?: any
};

export const UserContext = createContext<UserType>({});