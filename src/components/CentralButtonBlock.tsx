import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { colors } from "../utils/colors";
//icons
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import PresentToAllOutlinedIcon from '@mui/icons-material/PresentToAllOutlined';
//
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import { ButtonEndCall } from "./Buttons/ButtonEndCall";
import { ButtonOptions } from "./Buttons/ButtonOptions";
import { ButtonVoice } from "./Buttons/ButtonVoice";
import { ButtonCamera } from "./Buttons/ButtonCamera";

const buttonList = [
  { icon: EmojiEmotionsOutlinedIcon, title: 'Надіслати реакцію', inform: null },
  { icon: PresentToAllOutlinedIcon, title: 'Розпочати презентацію зараз', inform: null },
  { icon: BackHandOutlinedIcon, title: 'Підняти руку', inform: null },
];

const useStyles = makeStyles({
  buttonContainer: {
    height: '100%',
    width: 400,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icons: {
    color: colors.FONTS_COLOR,
  },
  informColor: {
    backgroundColor: colors.GREY_FOR_BUTTON,
    color: colors.FONTS_COLOR,
  },
});

export const CentralButtonBlock = () => {
  const classes = useStyles();

  return (
    <Box className={classes.buttonContainer}>
      <ButtonVoice />
      <ButtonCamera />
      {buttonList.map(buttonIcon => (
        <IconButton
          key={buttonIcon.title}
          aria-label={buttonIcon.title}
          size="medium"
          style={{ 
            backgroundColor: colors.GREY_FOR_BUTTON,
          }}
        >
          <Badge
            badgeContent={buttonIcon.inform}
            classes={{ badge: classes.informColor }}
          >
            <buttonIcon.icon className={classes.icons} />
          </Badge>
        </IconButton>
      ))}
      <ButtonOptions />
      <ButtonEndCall/>
    </Box>
  );
};
