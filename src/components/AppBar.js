import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import MoreIcon from '@material-ui/icons/MoreVert';

const messages = [
    {
        title: 'Brunch this week?',
        description: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        image: '/static/images/avatar/5.jpg',
    },
    {
        title: 'dadsadsafa!!@#1',
        description: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        image: '/static/images/avatar/5.jpg',
    },
    {
        title: 'asdasdasfdgdhf@!#!@',
        description: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        image: '/static/images/avatar/5.jpg',
    },
    {
        title: 'Brunch this week?',
        description: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        image: '/static/images/avatar/5.jpg',
    },
];

const useStyles = makeStyles((theme) => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}));

export default function BottomAppBar() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Paper square className={classes.paper}>
                <Typography className={classes.text} variant="h5" gutterBottom>
                    All videos
                </Typography>
                <List className={classes.list}>
                    {messages.map(({title, description, image}, index) => (
                        <React.Fragment key={index}>
                            {<ListSubheader className={classes.subheader}>Video {index+1}</ListSubheader>}
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar alt="Profile Picture" src={image} />
                                </ListItemAvatar>
                                <ListItemText primary={title} secondary={description} />
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Typography>
                        Video Downloader
                    </Typography>
                    <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                        <AddIcon />
                    </Fab>
                    <div className={classes.grow} />
                    <IconButton edge="end" color="inherit">
                        <MoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}