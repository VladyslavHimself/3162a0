import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  useMediaQuery,
  makeStyles
} from '@material-ui/core';

import { AuthLayout } from './Layouts/AuthLayout/component';
import Hint from './components/Hint';
import { AuthForm } from './components/AuthForm/component';
import { IInput } from './components/Ui/IInput/component';

const useStyles = makeStyles({
  
  container: {
    width: '58.5%',
    height: '100vh',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Login = ({ user, login }) => {
  const history = useHistory();

  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  const matches = useMediaQuery('(max-width:700px)');
  const isMobile = !!matches;

  return (
    <AuthLayout>
      {
        !isMobile && 
        <Hint
        hintText='Don’t have an account?'
        link='/register'
        buttonText='Create account'
      />
      }

      <Box className={classes.container}>
        <AuthForm
         authHandler={handleLogin}
         isMobile={isMobile} 
         title='Welcome back!'
         sumbitButtonValue='Login'
        >
          <IInput type="username" name="username" label='Username' isRequired />
          <IInput type="password" name="password" isRequired />
        </AuthForm>
      </Box>
    </AuthLayout>
  );
};

export default Login;