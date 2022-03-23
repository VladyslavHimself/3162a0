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

export const IInput = ({ inputType = 'text', inputName, inputLabel = inputName, isRequired = false }) => {

  const classes = inputStyles();

  return (
    <FormControl className={classes['input']}>
      <TextField
        aria-label="username"
        label={inputLabel}
        name={inputName}
        type={inputType}
        required={isRequired}
      />
    </FormControl>
  )
}