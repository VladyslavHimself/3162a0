import React from 'react';
import {
  Box,
  makeStyles,
} from '@material-ui/core';

import IButton from './../Ui/Button';

const authFormStyles = makeStyles({
  'auth-form': {
    marginTop: '50px',
    width: '380px',
  },

  'auth-form__form-field': {
    display: 'flex',
    flexDirection: 'column',
  },

  'auth-form__header': {
    width: '100%',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '26px',
    lineHeight: '40px',
    marginBottom: '20px',
  }
});

export const AuthForm = ({ authHandler, children }) => {
  const classes = authFormStyles();

  return (
    <Box className={classes['auth-form']}>
      <h2 className={classes['auth-form__header']}>Create your account.</h2>
      <form className={classes['auth-form__form-field']} onSubmit={authHandler}>
  
        { children && children }

        <Box width='140px' height='54px' display='flex' alignSelf='center' marginTop='40px' className={classes['auth-form__submit-button']}>
          <IButton styleType='accent'  text='Create' isSubmit />
        </Box>
      </form>
    </Box>
  )
}