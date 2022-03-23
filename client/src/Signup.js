import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  FormControl,
  TextField,
  makeStyles,
} from '@material-ui/core';

import bgImg from './assets/bg-img.png';
import chatSvg from './assets/chat-icon.svg';
import Hint from './components/Hint';
import { IButton } from './components/Ui/Button/component';

const useStyles = makeStyles({
  'side-banner__image': {
    width: '100%',
    height: 'inherit'
  },

  'side-banner': {
    width: '41.5%',
    height: '100vh',
    position: 'relative',
  },

  'side-banner__textbox': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  'side-banner__header': {
    width: '270px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '26px',
    lineHeight: '40px',
    color: '#f4f4f4',
    
  },

  'side-banner__logo': {
    width: '66px',
    height: '66px',
  },

  container: {
    width: '58.5%',
    height: '100vh',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  'auth-form': {
    marginTop: '50px',
    width: '380px',
  },

  'auth-form__form-field': {
    display: 'flex',
    flexDirection: 'column',
  },

  'auth-form__input': {
    marginTop: '40px',
  },

  'auth-form__header': {
    width: '100%',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '26px',
    lineHeight: '40px',
    margin: 0,
  }
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
    <Box className='wrapper' display='flex'>
      <Box className={classes['side-banner']}>
        <img className={classes['side-banner__image']} src={bgImg} alt='side-banner' />
        <Box className={classes['side-banner__textbox']}>
          <img className={classes['side-banner__logo']} src={chatSvg} alt='chat-logo' />
          <h1 className={classes['side-banner__header']}>Converse with anyone with any language</h1>
        </Box>
      </Box>

      
      <Hint
        hintText='Already have an account?'
        link='/login'
        buttonText='Login'
      />

      <Box className={classes.container}>
        <Box className={classes['auth-form']}>
          <h2 className={classes['auth-form__header']}>Create your account.</h2>
          <form className={classes['auth-form__form-field']} onSubmit={handleRegister}>
            <FormControl className={classes['auth-form__input']}>
              <TextField
                aria-label="username"
                label="Username"
                name="username"
                type="text"
                required
              />
            </FormControl>
            
            <FormControl className={classes['auth-form__input']}>
              <TextField
                label="E-mail address"
                aria-label="e-mail address"
                type="email"
                name="email"
                required
              />
            </FormControl>
            
            <FormControl className={classes['auth-form__input']}>
              <TextField
                aria-label="password"
                label="Password"
                type="password"
                inputProps={{ minLength: 6 }}
                name="password"
                required
              />
            </FormControl>

            <Box width='140px' height='54px' display='flex' alignSelf='center' marginTop='40px' className={classes['auth-form__submit-button']}>
              <IButton styleType='accent'  text='Create' isSubmit />
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;