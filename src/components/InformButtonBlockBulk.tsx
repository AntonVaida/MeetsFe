import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//icons
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
//
import { colors } from "../utils/colors";
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
  },
  icons: {
    color: colors.FONTS_COLOR,
  },
  menuItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: 'red',
    height: 40,
  },
  menuIcon: {
    marginRight: "10px",
    color: colors.FONTS_COLOR,
  },
}));

export const InformButtonBlockBulk = () => {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(null);

  const handleClick = (event:any) => {
    setOpenMenu(event.currentTarget);
  };

  const handleClose = () => {
    setOpenMenu(null);
  };

  return (
    <Box className={classes.container}>
      <IconButton aria-label="more" size="large" onClick={handleClick}>
        {Boolean(openMenu) ? <ExpandLessOutlinedIcon className={classes.icons} /> : <ExpandMoreOutlinedIcon className={classes.icons} />}
      </IconButton>
      <Menu 
        anchorEl={openMenu} 
        open={Boolean(openMenu)} 
        onClose={handleClose} 
        PaperProps={{ sx: { backgroundColor: colors.MAIN_BACKGROUND }}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
      }}
      >
        <MenuItem className={classes.menuItem} sx={{backgroundColor: colors.MAIN_BACKGROUND}}>
          <CategoryOutlinedIcon className={classes.menuIcon} />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <PeopleAltOutlinedIcon className={classes.menuIcon} />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <MessageOutlinedIcon className={classes.menuIcon} />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <LockPersonOutlinedIcon className={classes.menuIcon} />
        </MenuItem>
      </Menu>
    </Box>
  );
};
