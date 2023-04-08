import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { User } from '../types/User';
import { colors } from '../utils/colors';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectUser } from '../features/selectUserSlice';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { CardMicroStatus } from './CardMicroStatus';
import { CircularProgress } from '@mui/material';

const DEPLOY_IMG_URL = 'https://raw.githubusercontent.com/AntonVaida/MeetsBe/main/public/';

type Props = {
    user: User,
};

const useStyles = makeStyles({
    cardContainer: {
        width: '23.5vw', 
        height: '26.6vh',
        borderWidth: 2,
        borderRadius: '3%',
        borderStyle: 'solid',
        position: 'relative',
        boxSizing: 'content-box',
        backgroundColor: colors.GREY_FOR_BUTTON,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardImg: {
        height: '100%',
        borderRadius: '3%',
    },
    userNameText: {
        width: '100%',
        height: 20,
        zIndex: 5,
        position: 'absolute',
        bottom: '5%',
        left: '3%',
    },
    icons: {
        position: 'absolute',
        zIndex: 3,
        top: 30,
        right: 30,
    },
    microStatusContainer: {
        position: 'absolute',
        top: '3%',
        right: '9%',
    },
    imgContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
  });


export const CardItem:React.FC<Props> = ({user}) => {
    const disptch = useAppDispatch();
    const { loadingNewImg } = useAppSelector((state) => state.users);
    const { selectedUser } = useAppSelector((state) => state.selectedUser);
    const classes = useStyles();
    // console.log('ITEm===>', `${DEPLOY_IMG_URL}${user?.ImageUrl}`, user.speaking)
  return (
    <Box 
        className={classes.cardContainer}
        sx={{borderColor: user.speaking ? colors.BLUE_FOR_BORDER : colors.MAIN_BACKGROUND}}
        onClick={() => {
            disptch(selectUser(user)) 
        }}
    >
        {( loadingNewImg 
            && selectedUser 
            && (selectedUser?.ImageUrl === user.ImageUrl)
            ) ? (
                <CircularProgress color="secondary" />
            ) : (
                <Box className={classes.imgContainer}>
                    <CardMedia
                        className={classes.cardImg}
                        image={`${DEPLOY_IMG_URL}${user?.ImageUrl}`}
                        title={user?.name}
                        style={{
                            height: user.camera ? '100%' : '7vw',
                            width: user.camera ? '100%' : '7vw',
                            borderRadius: user.camera ? '3%' : '3.5vw',
                        }}
                    />
                </Box>
            ) }
            <Box className={classes.microStatusContainer}>
                <CardMicroStatus 
                    micro={user.microphone} 
                    speaking={user.speaking}
                />
            </Box>
            <Typography
                variant="subtitle2"
                className={classes.userNameText}
            >
                {user?.name}
            </Typography>
    </Box>
  );
}