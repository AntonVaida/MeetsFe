import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import { colors } from "../utils/colors";

const ButtonList = [
    {icon: InfoOutlinedIcon, title: 'Деталі зустрічі', inform: null},
    {icon: PeopleAltOutlinedIcon, title: 'Показати всіх', inform: '1'},
    {icon: MessageOutlinedIcon, title: 'Почати чат з усіма', inform: null},
    {icon: CategoryOutlinedIcon, title: 'Дії', inform: null},
    {icon: LockPersonOutlinedIcon, title: 'Керування зустріччю', inform: null},
]

const useStyles = makeStyles({
    buttonContainer: {
        height: '100%',
        width: '20vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    icons: {
        color: colors.FONTS_COLOR,
    }
});

export const InformButtonBlock = () => {
    const classes = useStyles();
    return (
        <Box className={classes.buttonContainer}>
            {ButtonList.map(buttonIcon => (
            <IconButton aria-label={buttonIcon.title} size="large">
                <buttonIcon.icon className={classes.icons} />
            </IconButton>
            ))}
        </Box>
    )
}