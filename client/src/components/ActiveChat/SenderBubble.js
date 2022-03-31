import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#91A3C0',
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: 'bold',
  },
  bubble: {
    background: '#F4F6FA',
    borderRadius: '10px 10px 0 10px',
  },
}));

const useImageStyles = (gallerySize, text) => makeStyles(() => ({
  image: {
    maxWidth:
        gallerySize.length > 1 ? '128px' : '256px',
    maxHeight:
        gallerySize.length > 1 ? '128px' : '256px',

    backgroundSize: 'cover',
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px',
    borderRadius: !text && '10px',
    borderBottomRightRadius: !text && '0px',

    transition: '.5s ease',
    '&:hover': {
      filter: 'brightness(0.8)',
    }
  },
}));

const SenderBubble = ({ time, text, images }) => {
  const classes = useStyles();
  const imgCls = useImageStyles(images, text)();
  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <Box className={classes.bubble}>
      {
        images && images.map((image, idx) => (
          <a key={`image{${idx}`} href={image}>
            <img className={imgCls.image} src={image} alt={`img with description ${text}`} />
          </a>
        ))
      }
      { text && <Typography className={classes.text}>{text}</Typography> }
      </Box>
    </Box>
  );
};

export default SenderBubble;
