import React from "react";
import Box from '@mui/material/Box';
import { colors } from '../utils/colors';
import { makeStyles } from '@mui/styles';
import { InformButtonBlock } from "./InformButtonBlock";

const useStyles = makeStyles({
    bottomContainer: {
        width: '100vw',
        height: 70,
        backgroundColor: 'red',
        position: 'relative',
        zIndex: 6,
    },
});

export const BottonBar = () => {
    const classes = useStyles();

    return (
        <Box className={classes.bottomContainer}>
            <InformButtonBlock />
        </Box>
    )
}