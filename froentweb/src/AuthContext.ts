import { createContext } from "react";
 import { TokenData } from "./util/auth";


//ESTADO GLOBAL
export type AuthContextData = {
    authenticated: boolean; 
     tokenData?: TokenData;
};

export type AuthContextType = {
    authContextData: AuthContextData;
    setAuthContextData: (authContextData: AuthContextData) => void;
};

export const AuthContext = createContext<AuthContextType>({
    authContextData: {
        authenticated:false,
    },
    setAuthContextData: () => null,
})