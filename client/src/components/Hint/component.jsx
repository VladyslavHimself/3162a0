import {
  Box,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { IButton } from '../Ui/Button/component';

import UndecoratedLink from '../../Layouts/UndecoratedLink';

const hintStyles = makeStyles({
  'hint-container': {
    padding: '140px 20px',
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
  const classes = hintStyles();

  return (
    <Box className={classes.hint}>
      <Typography className={classes.hint__text}>{hintText}</Typography>
      <Box className={classes['hint-container']}>
        <UndecoratedLink href={link} to={link}>
          <IButton styleType='ghost' text={buttonText} />
        </UndecoratedLink>
      </Box>
    </Box>
  )
}