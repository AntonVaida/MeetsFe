import React from 'react';
import { makeStyles } from '@mui/styles';
import CallEndIcon from '@mui/icons-material/CallEnd';
import { colors } from '../../utils/colors';
//icons
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles({
  icons: {
    color: colors.FONTS_COLOR,
  },
});

export const ButtonEndCall = () => {
  const classes = useStyles();

  return (
    <IconButton
        aria-label='Завершити дзвінок'
        size="medium"
        style={{ 
        backgroundColor: colors.RED_FOR_BUTTON,
        width: 56,
        borderRadius: 50,
        }}
    >
        <CallEndIcon className={classes.icons} />
    </IconButton>
  );
};
