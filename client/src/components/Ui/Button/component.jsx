import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
const buttonStyles = makeStyles({

  'button': {
    boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
    borderRadius: '5px',
    width: '100%',
    height: '100%',
  },

  'ghost': {
    background: '#FFFFFF',
    color: '#3A8DFF',
  },

  'accent': {
    background: '#3A8DFF',
    color: '#fff',

    '&:hover': {
      background: '#0B8DAA',
    }
  },
})

export const IButton = ({ styleType = 'ghost' | 'accent' , text, isSubmit = false }) => {
  const classes = buttonStyles();

  const cls = [classes.button];

  styleType === 'ghost' && cls.push(classes.ghost);
  styleType === 'accent' && cls.push(classes.accent);

  return (
    <Button
      variant="contained"
      size="large"
      type={ isSubmit ? 'submit' : 'button' }
      className={cls.join(' ')}
    >
      { text }
    </Button>
  )
}