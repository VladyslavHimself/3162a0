import {
  FormControl,
  TextField,
  makeStyles,
  Box
} from '@material-ui/core';

import { Link } from 'react-router-dom';

const inputStyles = makeStyles({
  'input': {
    margin: '10px 0',
  },

  'input-label': {
    position: 'absolute',
    top: '70%',
    left: '95%',
    transform: 'translate(-95%, -70%)',
  },

  'input-label__link': {
    color: '#3A8DFF',
    textDecoration: 'none',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'center',


  }
});

const convertToUppercase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const IInput = ({
   type = 'text',
   name,
   label = convertToUppercase(name),
   isRequired = false,
   withForgotLink = false,
 }) => {
  const classes = inputStyles();

  return (
    <FormControl className={classes['input']}>
      <TextField
        aria-label={label}
        label={label}
        name={name}
        type={type}
        required={isRequired}
      />
      {
        withForgotLink && (
          <Box className={classes['input-label']}>
            <Link className={classes['input-label__link']} to='/forgot' href='/forgot'>Forgot?</Link>
          </Box>
        )
      }
    </FormControl>
  )
}