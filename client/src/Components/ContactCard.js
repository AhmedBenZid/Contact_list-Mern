import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { green } from '@material-ui/core/colors';
import { removeContact } from '../redux/Actions/ContactActions';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles({
    root: {
        minWidth: 400,
        maxWidth: 400,
        margin: 10
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function ContactCard({ el, i }) {
    const dispatch = useDispatch()
    const classes = useStyles();

    const delUser = () => {
        dispatch(removeContact(el._id))
    };

    return (

        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    User | {i + 1}
                </Typography>
                <Typography variant="h4" component="h2">
                    {`${el.firstName} ${el.lastName}`}
                </Typography>
                <Typography variant="h5" component="h2">
                    Email : {el.email}
                </Typography>
                <Typography variant="body2" component="p">
                    Date de Creaction : {el.dateCreation.slice(0, 10)}
                    {/* {el.dateCreation.slice(11, 19)} Heure de creation */}
                </Typography>
            </CardContent>
            <CardActions>
                <Fab color="secondary" aria-label="delete" onClick={delUser}>
                    <DeleteIcon />
                </Fab>
                <Fab style={{ color: green[600] }} color="primary" aria-label="edit" >
                    <EditIcon />
                </Fab>
            </CardActions>
        </Card>
    );
}