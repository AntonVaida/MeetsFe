import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
//icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
//
import { colors } from "../utils/colors";
import { InformButtonBlockBulk } from "./InformButtonBlockBulk";

const ButtonList = [
    {icon: InfoOutlinedIcon, title: 'Деталі зустрічі', inform: null},
    {icon: PeopleAltOutlinedIcon, title: 'Показати всіх', inform: '12'},
    {icon: MessageOutlinedIcon, title: 'Почати чат з усіма', inform: null},
    {icon: CategoryOutlinedIcon, title: 'Дії', inform: null},
    {icon: LockPersonOutlinedIcon, title: 'Керування зустріччю', inform: null},
]

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        height: '100%',
        width: 300,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            width: 40,
        },
    },
    icons: {
        color: colors.FONTS_COLOR,
    },
    informColor: {
        backgroundColor: colors.GREY_FOR_BUTTON,
        color: colors.FONTS_COLOR,
    },
    [theme.breakpoints.down('md')]: {
        itemsList: {
            display: 'none'
        },
        width: 40,
    },
}));

export const InformButtonBlock = () => {
    const classes = useStyles();
    return (
        <Box className={classes.buttonContainer}>
            {ButtonList.map(buttonIcon => (
            <Box className={classes.itemsList}>
                <IconButton aria-label={buttonIcon.title} size="large">
                <Badge 
                    badgeContent={buttonIcon.inform} 
                    classes={{ badge: classes.informColor }}
                    >
                    <buttonIcon.icon className={classes.icons} />
                </Badge>
            </IconButton>
            </Box>
            ))}
            <InformButtonBlockBulk />
        </Box>
    )
}