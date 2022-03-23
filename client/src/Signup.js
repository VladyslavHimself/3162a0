import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  makeStyles,
  useMediaQuery,
} from '@material-ui/core';

import Hint from './components/Hint';
import AuthLayout from './Layouts/AuthLayout';
import AuthForm from './components/AuthForm';
import IInput from './components/Ui/IInput';

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

  const isMobile = useMediaQuery('(max-width:700px)');

  return (
    <AuthLayout>
      {
        !isMobile && 
          <Hint
            hintText='Already have an account?'
            link='/login'
            buttonText='Login'
          />
      }

      <Box className={classes.container}>
        
        <AuthForm
         authHandler={handleRegister}
         isMobile={isMobile}
         title={'Create an account.'}
         sumbitButtonValue={'Create'}
        >
          <IInput type="text" name="username" isRequired />
          <IInput type="email" name="email" label='E-mail address' isRequired />
          <IInput type="password" name="password" isRequired />
        </AuthForm>

      </Box>
    </AuthLayout>
  );
};

export default Signup;