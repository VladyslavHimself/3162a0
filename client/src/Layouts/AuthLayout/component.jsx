import {
  Box,
  makeStyles,
  useMediaQuery,
} from '@material-ui/core';

import bgImg from './../../../src/assets/bg-img.png';
import chatSvg from './../../assets/chat-icon.svg';

const sideBannerStyles = makeStyles({
  'side-banner__image': {
    width: '100%',
    height: 'inherit'
  },

  'side-banner': {
    width: '41.5%',
    height: '100vh',
    position: 'relative',
  },

  'side-banner__textbox': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
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
});

export const AuthLayout = ({ children }) => {
  const classes = sideBannerStyles();

  const matchesMedia = useMediaQuery('(min-width: 700px)');
  const isMobile = matchesMedia;

  return (
    <Box className='wrapper' display='flex' justifyContent={'center'} alignItems={'center'}>
      { isMobile && (
          <Box className={classes['side-banner']}>
          <img className={classes['side-banner__image']} src={bgImg} alt='side-banner' />
          <Box className={classes['side-banner__textbox']}>
            <img className={classes['side-banner__logo']} src={chatSvg} alt='chat-logo' />
            <h1 className={classes['side-banner__header']}>Converse with anyone with any language</h1>
          </Box>
        </Box>   
      )}
      { children }
    </Box>
  )

}