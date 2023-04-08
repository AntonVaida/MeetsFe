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

const DEPLOY_IMG_URL = 'https://raw.githubusercontent.com/AntonVaida/MeetsBe/main/public/';

type Props = {
    user: User,
};

const useStyles = makeStyles({
    root: {},
})



export const CardItem:React.FC<Props> = ({user}) => {
    const classes = useStyles();
    const disptch = useAppDispatch();

    // console.log('ITEm===>', `${DEPLOY_IMG_URL}${user?.ImageUrl}`, user.speaking)
  return (
    <Card sx={{ 
        width: '22%', 
        height: '30%',
        borderWidth: '2', 
        borderColor: user.speaking ? colors.BLUE_FOR_BORDER : 'none',
        borderRadius: '4%',
        position: 'relative',
        }}
        onClick={() => {
            disptch(selectUser(user)) 
        }}
    >
      <CardMedia
        sx={{ height: '100%' }}
        image={`${DEPLOY_IMG_URL}${user?.ImageUrl}`}
        title={user?.name}
      />
      <Typography style={{
        width: '100%',
        height: 20,
        zIndex: 3,
        position: 'absolute'
      }}>
        {user?.name}
      </Typography>
    </Card>
  );
}