import React from 'react';

import StyledSignIn from './styles/StyledSignIn';
import User from './img/user.svg';

export default function SignIn() {
  return (
    <StyledSignIn className="sign_in">
      <img src={User} alt="Se connecter" />
      <span>Se connecter</span>
    </StyledSignIn>
  );
}
