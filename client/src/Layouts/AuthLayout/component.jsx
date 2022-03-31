import {
  Box,
  makeStyles,
  useMediaQuery,
  Typography
} from '@material-ui/core';

import bgImg from './../../../src/assets/bg-img.png';
import chatSvg from './../../assets/chat-icon.svg';

const authStyles = makeStyles({
  'side-banner__image': {
    width: '100%',
    height: 'inherit',
    objectFit: 'cover'
  },

  'side-banner': {
    width: '41.5%',
    height: '100vh',
    position: 'relative',
  },

  'side-banner__textBox': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  'side-banner__header': {
    width: '270px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '26px',
    lineHeight: '40px',
    color: '#f4f4f4',
    
  },

  'side-banner__logo': {
    width: '66px',
    height: '66px',
  },

  'wrapper': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export const AuthLayout = ({ children }) => {
  const classes = authStyles();

  const matchesMedia = useMediaQuery('(min-width: 700px)');
  const isMobile = matchesMedia;

  return (
    <Box className={classes.wrapper}>
      {
        isMobile && (
          <Box className={classes['side-banner']}>
            <img className={classes['side-banner__image']} src={bgImg} alt='side-banner' />
            <Box className={classes['side-banner__textBox']}>
              <img className={classes['side-banner__logo']} src={chatSvg} alt='chat-logo' />
              <Typography className={classes['side-banner__header']}>
                Converse with anyone with any language
              </Typography>
            </Box>
          </Box>
        )
      }
      { children }
    </Box>
  );
}