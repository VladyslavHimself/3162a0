import { Link } from 'react-router-dom';
import {
  Box,
  makeStyles,
} from '@material-ui/core';
import { IButton } from '../Ui/Button/component';

const hintStyle = makeStyles({
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

})

export const Hint = ({ hintText, link, buttonText }) => {
  const classes = hintStyle();

  return (
    <Box className={classes.hint}>
      <span className={classes.hint__text}>{hintText}</span>
      <Box width='140px' height='54px'>
        <Link href={link} to={link} style={{textDecoration: 'none'}}>
          <IButton styleType='ghost' text={buttonText} />
        </Link>
      </Box>
    </Box>
  )
}