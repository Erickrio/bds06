const tokenKey = 'authData';

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;
  };
  
//salva os dados do localStorage (armazenamento local)
export const saveAuthData = (obj: LoginResponse) => {
    localStorage.setItem(tokenKey, JSON.stringify(obj));
  };
  
  //pega os dados do localStorage (armazenamento local)
  export const getAuthData = () => {
    const str = localStorage.getItem(tokenKey) ?? '{}';
    return JSON.parse(str) as LoginResponse;
  };
  
  //remove o localStorage
  export const removeAuthData = () => {
    localStorage.removeItem(tokenKey)
  };