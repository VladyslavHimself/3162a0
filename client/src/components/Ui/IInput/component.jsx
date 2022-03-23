import {
  FormControl,
  TextField,
  makeStyles,
} from '@material-ui/core';


const inputStyles = makeStyles({
  'input': {
    margin: '10px 0',
  },
});

const convertToUppercase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const IInput = ({
   type = 'text',
   name,
   label = convertToUppercase(name),
   isRequired = false
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
    </FormControl>
  )
}