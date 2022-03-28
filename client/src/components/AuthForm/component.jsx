import React from 'react';
import {
  Box,
  makeStyles,
} from '@material-ui/core';

import IButton from './../Ui/Button';

import { Link } from 'react-router-dom';

const authFormStyles = makeStyles({
  'auth-form': {
    marginTop: '50px',
    width: '380px',
  },

  'auth-form--mobile': {
    marginTop: '50px',
    width: '290px',
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
  },

  'auth-form__submit-button': {
    width:'140px',
    height:'54px',
    display:'flex',
    alignSelf:'center',

    marginTop: '40px'
  }
});

export const AuthForm = ({ isMobile, authHandler, children, title, sumbitButtonValue, mobileHintProps }) => {
  const classes = authFormStyles();

  const authFormCls = [classes['auth-form']];

  isMobile && authFormCls.push(classes['auth-form--mobile']);

  return (
    <Box className={authFormCls.join(' ')}>
      <h2 className={classes['auth-form__header']}>{title}</h2>
      <form className={classes['auth-form__form-field']} onSubmit={authHandler}>

        {children}

        {
          isMobile ? 
          (
            <Box display='flex' justifyContent='space-between' marginTop='40px'>
              <Box className={classes['auth-form__submit-button']}>
                <Link href={mobileHintProps.href} to={mobileHintProps.href} style={{textDecoration: 'none'}}>
                  <IButton styleType='outline' text={ mobileHintProps.buttonText } />
                </Link>
              </Box>

              <Box className={classes['auth-form__submit-button']}>
                <IButton styleType='accent' text={sumbitButtonValue} isSubmit />
              </Box>
            </Box>
          ) 
            : 
          (
            <Box className={classes['auth-form__submit-button']}>
              <IButton styleType='accent' text={sumbitButtonValue} isSubmit />
            </Box>
          )
        }
      </form>
    </Box>
  )
}