/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */


import React from 'react';
import './Person.css';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";



const person = (props) => {

    const classes = makeStyles({
        card: {
            minWidth: 275,
            maxWidth: 320,
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

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    {props.name}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.age} years old
                </Typography>
                <input onChange={props.changeName} value={props.name}/>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" color="secondary" onClick={props.deletePerson}>Delete</Button>
            </CardActions>
        </Card>

    )
};

export default person;