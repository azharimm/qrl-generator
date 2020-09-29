import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CropFreeIcon from '@material-ui/icons/CropFree';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <CropFreeIcon style={{marginRight: 5}} />
                    <Typography variant="h6" className={classes.title}>
                        Qrl Shortener
                    </Typography>
                    <Button color="inherit">
                        Home
                    </Button>
                    <Button color="inherit">
                        History
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
