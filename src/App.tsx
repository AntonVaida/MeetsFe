import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { init, randomImgForUser } from './features/userSlice';
import { CardItem } from './components/CardItem';
import { UserList } from './components/UserList';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { colors } from './utils/colors';
import { BottonBar } from './components/BottomBar';

const useStyles = makeStyles((theme) => ({
  appContainer: {
      width: '100vw', 
      height: '100vh',
      boxSizing: 'border-box',
      overflow: 'hidden',
      backgroundColor: colors.MAIN_BACKGROUND,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', 
  },
  listContaner: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },

}));

function App() {
  const classes = useStyles();
  return (
    <Box
      className={classes.appContainer}
    >
      <Box
        className={classes.listContaner}
      >
        <UserList />
      </Box>
      <BottonBar />
    </Box>
  );
}

export default App;
