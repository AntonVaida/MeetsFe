import React from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    titleContainer: {
        height: '100%',
        width: 300,
        paddingLeft: 30,
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    [theme.breakpoints.down('md')]: {
        titleContainer: {
            display: 'none'
        }
      },
  }));

export const MeetTitle = () => {
    const classes = useStyles();

    return (
        <Box className={classes.titleContainer}>
            <Typography variant="subtitle1">
                Team Meeting
            </Typography>
        </Box>
    )
}