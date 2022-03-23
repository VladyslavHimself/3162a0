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

export const IInput = ({ type = 'text', name, label = name, isRequired = false }) => {

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