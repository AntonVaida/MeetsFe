import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { colors } from '../../utils/colors';
import IconButton from '@mui/material/IconButton';
//icons
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';

const useStyles = makeStyles({
  icons: {
    color: colors.FONTS_COLOR,
  },
});

export const ButtonCamera = () => {
  const classes = useStyles();
  const [camera, setCamera] = useState(true)

  return (
    <IconButton
        aria-label={ camera ? 'Вимкнути камеру': 'Увімкути камеру'}
        size="medium"
        style={{ 
        backgroundColor: camera ? colors.GREY_FOR_BUTTON : colors.RED_FOR_BUTTON,
        }}
        onClick={() => {
            setCamera(prev => !prev)
        }}
    >
        {camera ? <VideocamOutlinedIcon className={classes.icons} /> : <VideocamOffOutlinedIcon className={classes.icons} />}
    </IconButton>
  );
};
