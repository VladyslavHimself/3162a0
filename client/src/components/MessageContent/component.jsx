import {Box, Link, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useImageStyles = (gallerySize, isAccountSender) => makeStyles(() => ({
    image: {
        maxWidth:
            gallerySize.length > 1 ? '128px' : '256px',
        maxHeight:
            gallerySize.length > 1 ? '128px' : '256px',

        backgroundSize: 'cover',
        borderRadius: isAccountSender ? '10px 10px 0px 10px' : '0px 10px 10px 10px',

        transition: '.5s ease',
        '&:hover': {
            filter: 'brightness(0.8)',
        }
    },
}));

export const MessageContent = ({images, text, isAccountSender, componentStyles}) => {
    const imgCls = useImageStyles(images, isAccountSender)();
    const classes = componentStyles();


    return (
        <Box className={classes.bubble}>
            {(text && images.length > 1) && <Typography className={classes.text}>{text}</Typography>}
            {
                images && images.map((image) => (
                    <Link key={image} href={image}>
                        <img className={imgCls.image} src={image} alt={`img with description ${text}`} />
                    </Link>
                ))
            }
            {
                ((text && images.length === 1) || (text && !images.length)) && <Typography className={classes.text}>{text}</Typography>
            }
        </Box>
    );
};