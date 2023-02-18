import './assets/styles/custom.scss';
import './App.css';
import Routes from './Routes';
import { AuthContext, AuthContextData } from './AuthContext';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';



function App() {

  const [authContextData, setAuthContextData ] = useState<AuthContextData>({
    authenticated: false
  });

  return (
     <AuthContext.Provider value={{  authContextData, setAuthContextData }}>
        <Routes />
        <Toaster />
     </AuthContext.Provider> 

  );
}

export default App;
