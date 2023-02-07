import jwtDecode from 'jwt-decode';
import { getAuthData } from './storage';

export type Role = 'ROLE_MEMBER' | 'ROLE_VISITOR';

//Dados do Token
export type TokenData = {
  exp: number;
  user_name: string;
  authorities: Role[];
};

//decodifica Token usuario logado
export const getTokenData = (): TokenData | undefined => {
    const loginResponse = getAuthData();
    try {
      return jwtDecode(loginResponse.access_token) as TokenData;
    } catch (error) {
      return undefined;
    }
  };
  
  //função que verifica se o usr está autenticado
  export const isAuthenticated = () : boolean => {
    const tokenData = getTokenData();
    return (tokenData && tokenData.exp * 1000 > Date.now()) ? true : false;
  }
  

//função que determina se o usr possui um determinado ROLES passado.
export const hasAnyRoles = (roles: Role[]) : boolean => {
   
    if (roles.length === 0){
       return true;
    }
    //busca o Token Data
    const tokenData = getTokenData();
  
    //sem usr válido
    if (tokenData !== undefined) {
      return roles.some((role) => tokenData.authorities.includes(role));
    }
    return false;
  
  };