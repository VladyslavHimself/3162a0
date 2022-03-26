import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Button} from '@material-ui/core';
import { Input, Header, Messages } from './index';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexGrow: 8,
    flexDirection: 'column',
  },
  chatContainer: {
    marginLeft: 41,
    marginRight: 41,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
  },

  'image-input': {
    position: 'absolute',
    top: '45%',
    left: '95%',
    transform: 'translate(-95%, -45%)',
    // backgroundColor: '#f4f4f4'
  }
}));

const ActiveChat = ({
  user,
  conversations,
  activeConversation,
  postMessage,
  setImagesHandler,
}) => {
  const classes = useStyles();

  const conversation = conversations
    ? conversations.find(
        (conversation) => conversation.otherUser.username === activeConversation
      )
    : {};

  const isConversation = (obj) => {
    return obj !== {} && obj !== undefined;
  };

  return (
    <Box className={classes.root}>
      {isConversation(conversation) && conversation.otherUser && (
        <>
          <Header
            username={conversation.otherUser.username}
            online={conversation.otherUser.online || false}
          />
          <Box className={classes.chatContainer}>
            {user && (
              <>
                <Messages
                  messages={conversation.messages}
                  otherUser={conversation.otherUser}
                  userId={user.id}
                />
                <div style={{position: 'relative'}}>
                  <Input
                    otherUser={conversation.otherUser}
                    conversationId={conversation.id || null}
                    user={user}
                    postMessage={postMessage}
                  />

                  <Button
                      className={classes['image-input']}
                      variant="contained"
                      component="label"
                  >
                    <AddAPhotoIcon />
                    <input
                        type='file'
                        multiple
                        onChange={(e) => {setImagesHandler(e.target.files)}}
                        hidden
                    />
                  </Button>
                </div>
              </>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default ActiveChat;
