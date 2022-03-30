import { Link } from 'react-router-dom';
import {
    makeStyles
} from '@material-ui/core';

const linkStyles = makeStyles({
    'link': {
        textDecoration: 'none',
    }
})

export const UndecoratedLink = ({ children, ...props }) => {

    const classes = linkStyles();

    return (
        <Link className={classes.link} {...props}>
            { children }
        </Link>
    )
}