import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { colors } from '../../utils/colors';
import IconButton from '@mui/material/IconButton';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Typography, Box,  MenuItem, Menu, Popover} from '@mui/material';
////icons
import SettingsIcon from '@mui/icons-material/Settings';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PictureInPictureIcon from '@mui/icons-material/PictureInPicture';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import CastOutlinedIcon from '@mui/icons-material/CastOutlined';

const menuItemList = [
    {icon: CastOutlinedIcon, title: 'Транслювати зустріч', subtitle: null},
    {icon: BorderColorOutlinedIcon, title: 'Дошка для конференцій', subtitle: 'відкрити макет в Jam'},
    {icon: DashboardOutlinedIcon, title: 'Змінити макет', subtitle: null},
    {icon: FullscreenIcon, title: 'Повноекранний режим', subtitle: null},
    {icon: PictureInPictureIcon, title: 'Перейти в режим "Картинка в картинці"', subtitle: null},
    {icon: AutoAwesomeIcon, title: 'Застосувати візуальні ефекти', subtitle: null},
    {icon: AnnouncementOutlinedIcon, title: 'Повідомлення про пороблему', subtitle: null},
    {icon: ReportGmailerrorredIcon, title: 'Повідомлення про порушення', subtitle: null},
    {icon: TroubleshootIcon, title: 'Вирішення проблем і довідка', subtitle: null},
    {icon: SettingsIcon, title: 'Налаштування', subtitle: null},
]

type Item = {
    icon: any,
    title: string,
    subtitle: null | string
}

const useStyles = makeStyles({
  icons: {
    color: colors.FONTS_COLOR,
  },
  menuItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 40,
  },
  menuIcon: {
    marginRight: "10px",
  },
});

export const ButtonOptions = () => {
    const classes = useStyles();
    const [openMenu, setOpenMenu] = useState(null);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [positionSelectItem, setPositionSelectItem] = useState(null)
  
    const handleClick = (event: any) => {
      setOpenMenu(event.currentTarget);
    };
  
    const handleClose = () => {
      setOpenMenu(null);
    };
  
    const handleMenuItemClick = (event: any, item:Item) => {
      setSelectedItem(item);
      setPositionSelectItem(event.currentTarget)
    };
  
    return (
      <>
          <IconButton
            aria-label='Інші опції'
            size="medium"
            style={{ 
              backgroundColor: colors.GREY_FOR_BUTTON,
            }}
            onClick={handleClick}
          >
              <MoreVertOutlinedIcon className={classes.icons} />
          </IconButton>
        <Menu 
            anchorEl={openMenu} 
            open={Boolean(openMenu)} 
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
          {menuItemList.map((item, index) => (
              <MenuItem key={index} className={classes.menuItem} onClick={(event) => handleMenuItemClick(event, item)}>
                  <item.icon className={classes.menuIcon} />
                  <Box>
                      <Typography>
                          {item.title}
                      </Typography>
                      <Typography variant='body2'>
                          {item.subtitle}
                      </Typography>
                  </Box>
              </MenuItem> 
          ))}
        </Menu>
        {selectedItem && (
          <Popover
            open={Boolean(selectedItem)}
            anchorEl={positionSelectItem}
            onClose={() => {setSelectedItem(null)}}
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'right',
            }}
            >
            <Typography sx={{ p: 2 }}>{selectedItem.title}</Typography>
        </Popover>
        )}
      </>
    );
  };
  