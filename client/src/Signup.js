import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  makeStyles,
} from '@material-ui/core';

import Hint from './components/Hint';
import { AuthLayout } from './Layouts/AuthLayout/component';
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

const Signup = ({ user, register }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;

    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <AuthLayout>
      <Hint
        hintText='Already have an account?'
        link='/login'
        buttonText='Login'
      />

      <Box className={classes.container}>
        <AuthForm authHandler={ handleRegister }>
          <IInput inputType="text" inputName="Username" isRequired />
          <IInput inputType="email" inputName="Email" inputLabel='E-mail address' isRequired />
          <IInput inputType="password" inputName="Password" isRequired />
        </AuthForm>
      </Box>
    </AuthLayout>
  );
};

export default Signup;