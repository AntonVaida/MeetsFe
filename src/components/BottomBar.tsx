import React from "react";
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { InformButtonBlock } from "./InformButtonBlock";
import { CentralButtonBlock } from "./CentralButtonBlock";
import { MeetTitle } from "./MeetTitle";
import { colors } from "../utils/colors";

const useStyles = makeStyles((theme) => ({
    bottomContainer: {
        width: '100vw',
        height: 70,
        position: 'relative',
        zIndex: 6,
        display: 'flex',
        backgroundColor: colors.MAIN_BACKGROUND,
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
        },
        [theme.breakpoints.down('sm')]: {
            height: '8vh',
        },
    },
}));

export const BottonBar = () => {
    const classes = useStyles();

    return (
        <Box className={classes.bottomContainer}>
            <MeetTitle />
            <CentralButtonBlock />
            <InformButtonBlock />
        </Box>
    )
}