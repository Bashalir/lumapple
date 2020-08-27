import React from 'react';
import PropTypes from 'prop-types';

import {authMethods} from '../firebase/authMethods';

const AuthProvider = props => {
  const handleSignup = () => {
    console.log('handleSignup');
    return authMethods.signup();
  };

  return (
    <firebaseAuth.Provider
      value={{
        handleSignup,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export const firebaseAuth = React.createContext();

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
