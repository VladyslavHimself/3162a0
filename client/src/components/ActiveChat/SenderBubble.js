import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import MessageContent from "../MessageContent";

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
  }
}));


const SenderBubble = ({ time, text, images }) => {
  const { root, date } = useStyles();

  return (
    <Box className={root}>
      <Typography className={date}>{time}</Typography>
      <MessageContent images={images} text={text} isAccountSender componentStyles={useStyles} />
    </Box>
  );
};

export default SenderBubble;
