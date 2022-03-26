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

const useImageStyles = makeStyles(() => ({
  image: {
    transition: '.5s ease',
    '&:hover': {
      filter: 'brightness(0.8)',
    }
  },

  'single': {
    maxWidth: '256px',
    maxHeight: '256px',
    backgroundSize: "cover",
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px',
  },

  'without-text': {
    maxWidth: '256px',
    maxHeight: '256px',
    backgroundSize: "cover",
    borderRadius: '10px',
    borderBottomRightRadius: '0px',
  },

  'multiple': {
    maxWidth: '128px',
    maxHeight: '128px',
    backgroundSize: "cover",
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px',
  }
}))

const SenderBubble = ({ time, text, images }) => {
  const classes = useStyles();
  const imgCls = useImageStyles();
  const cls = [ imgCls.image ];

  images.length === 1 && cls.push(imgCls['single']);
  images.length > 1 && cls.push(imgCls['multiple']);
  !text && cls.push(imgCls['without-text']);

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <Box className={classes.bubble}>
      { images && images.map(image => (
          <a href={image}>
            <img key={text} className={cls.join(' ')} src={image} alt={`img with description ${text}`} />
          </a>
      )) }
      { text && <Typography className={classes.text}>{text}</Typography> }
      </Box>
    </Box>
  );
};

export default SenderBubble;
