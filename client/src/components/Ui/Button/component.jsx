import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
const buttonStyles = styleType => makeStyles(() => ({

  'button': {
    width: '100%',
    height: '100%',

    color:
        styleType === 'outline' | styleType === 'ghost' ? '#3A8DFF' : '#f4f4f4',
    background:
        styleType === 'outline' | styleType === 'ghost' ? 'transparent' : '#3A8DFF',
    boxShadow:
        styleType === 'ghost' ? '0px 2px 12px rgba(74, 106, 149, 0.2)' : 'none',
    borderRadius: '5px',

    '&:hover': {
      background:
          styleType === 'accent' ? '#0B8DAA' : styleType === 'outline' && 'transparent',
      boxShadow: styleType === 'outline' && 'none',
    }
  },

}));

export const IButton = ({ styleType = 'accent', text, isSubmit = false }) => {
  const classes = buttonStyles(styleType)();

  return (
    <Button
      variant="contained"
      size="large"
      type={ isSubmit ? 'submit' : 'button' }
      className={classes.button}
    >
      { text }
    </Button>
  )
}