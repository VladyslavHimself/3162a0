import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
  makeStyles,
} from '@material-ui/core';

import bgImg from './assets/bg-img.png';
import chatSvg from './assets/chat-icon.svg';

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

  button: {
    background: '#FFFFFF',
    boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
    borderRadius: '5px',
    width: '100%',
    height: '100%',
    color: '#3A8DFF',
  },

  'button--accent': {

    boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
    borderRadius: '5px',
    width: '100%',
    height: '100%',
    background: '#3A8DFF',
    color: '#fff',
  },

  hint: {
    display: 'flex',
    width: 'fit-content',
    height: '100px',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    left: '90%',
    top: '3%',
    transform: 'translate(-90%, -10%)',

  },

  hint__text: {
    marginRight: '30px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '19px',
    textAlign: 'center',
    color: '#B0B0B0',
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

      <Box className={classes.hint}>
        <span className={classes.hint__text}>Already have an account?</span>
        <Box width='140px' height='54px'>
          <Link href="/login" to="/login">
            <Button variant="contained" className={classes.button}>Login</Button>
          </Link>
        </Box>
      </Box>


      <Box className={classes.container}>
        <Box className={classes['auth-form']}>
          <h2 className={classes['auth-form__header']}>Create your account</h2>

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
              <Button variant="contained" size="large"  type="submit" className={classes['button--accent']}>Login</Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;



/// ---- 


// <Grid container justifyContent="center">
//       <Box>
//         <Grid container item>
//           <Typography>Need to log in?</Typography>
//           <Link href="/login" to="/login">
//             <Button>Login</Button>
//           </Link>
//         </Grid>
// <form onSubmit={handleRegister}>
//   <Grid>
//     <Grid>
//       <FormControl>
//         <TextField
//           aria-label="username"
//           label="Username"
//           name="username"
//           type="text"
//           required
//         />
//       </FormControl>
//     </Grid>
//     <Grid>
//       <FormControl>
//         <TextField
//           label="E-mail address"
//           aria-label="e-mail address"
//           type="email"
//           name="email"
//           required
//         />
//       </FormControl>
//     </Grid>
//     <Grid>
//       <FormControl error={!!formErrorMessage.confirmPassword}>
//         <TextField
//           aria-label="password"
//           label="Password"
//           type="password"
//           inputProps={{ minLength: 6 }}
//           name="password"
//           required
//         />
//         <FormHelperText>
//           {formErrorMessage.confirmPassword}
//         </FormHelperText>
//       </FormControl>
//     </Grid>
//     <Grid>
//       <FormControl error={!!formErrorMessage.confirmPassword}>
//         <TextField
//           label="Confirm Password"
//           aria-label="confirm password"
//           type="password"
//           inputProps={{ minLength: 6 }}
//           name="confirmPassword"
//           required
//         />
//         <FormHelperText>
//           {formErrorMessage.confirmPassword}
//         </FormHelperText>
//       </FormControl>
//     </Grid>
//     <Button type="submit" variant="contained" size="large">
//       Create
//     </Button>
//   </Grid>
// </form>
//       </Box>
//     </Grid>