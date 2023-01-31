import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';

import { useDispatch } from 'react-redux'
import { startSignInWithGoogle } from '../../store';

export const GoogleProvider = () => {

  const dispatch  = useDispatch();

  const onGoogleSignIn = () => {

    dispatch( startSignInWithGoogle() );
  }

  return ( <button onClick={ () => onGoogleSignIn() }> { <GoogleIcon/> } </button>)
}
