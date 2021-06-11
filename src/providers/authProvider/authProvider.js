import React, { useEffect, createContext, useContext, useReducer } from 'react';
import { LayoutAnimation } from 'react-native';

import { reducer } from 'providers/authProvider/reducer';
import { ACTIONS } from 'providers/authProvider/actions';

const AuthContext = createContext(null);
const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { isLoading: true });

  useEffect(() => {
    const timeout = setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      dispatch({ type: ACTIONS.HIDE_SPLASH });
    }, 3000);

    return () => timeout;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
