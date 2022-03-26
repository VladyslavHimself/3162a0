import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import {Button, makeStyles} from "@material-ui/core";
import React from "react";


const useButtonStyles = makeStyles({
    'image-input': {
        position: 'absolute',
        top: '45%',
        left: '95%',
        transform: 'translate(-95%, -45%)',
    }
})



export const AddPhotoButton = ({ setImagesHandler }) => {
    const classes = useButtonStyles();

    return (
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
    );
};