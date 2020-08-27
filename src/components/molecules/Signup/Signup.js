import React, {useContext} from 'react';
import {firebaseAuth} from '../../../providers/AuthProvider';

const Signup = () => {
  const {handleSignup} = useContext(firebaseAuth);
  console.log(handleSignup);

  return <div>Signup</div>;
};

export default Signup;
