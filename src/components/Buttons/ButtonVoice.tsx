import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { colors } from '../../utils/colors';
import IconButton from '@mui/material/IconButton';
//icons
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import MicOffOutlinedIcon from '@mui/icons-material/MicOffOutlined';

const useStyles = makeStyles({
  icons: {
    color: colors.FONTS_COLOR,
  },
});

export const ButtonVoice = () => {
  const classes = useStyles();
  const [mute, setMute] = useState(false)

  return (
    <IconButton
        aria-label={ mute ? 'Увімкнути мікрофон': 'Вимкнути мікрофон'}
        size="medium"
        style={{ 
        backgroundColor: mute ? colors.RED_FOR_BUTTON : colors.GREY_FOR_BUTTON,
        }}
        onClick={() => {
            setMute(prev => !prev)
        }}
    >
        {mute ? <MicOffOutlinedIcon className={classes.icons} /> : <MicOutlinedIcon className={classes.icons} />}
    </IconButton>
  );
};
