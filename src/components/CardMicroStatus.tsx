import React, {useMemo} from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import MicOffIcon from '@mui/icons-material/MicOff';
import { colors } from '../utils/colors';

type Props = {
    micro: boolean,
    speaking: boolean,
}

const useStyles = makeStyles({
    iconContainer: {
        width: 20, 
        height: 20,
        borderRadius: 10,
        backgroundColor: colors.GREY_FOR_BUTTON,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 6,
        position: 'absolute',
    },
    icon: {
        color: colors.WHITE,
    },
  });

export const CardMicroStatus:React.FC<Props> = ({micro, speaking}) => {
    const classes = useStyles();
    return (
        <Box
            className={classes.iconContainer}
            sx={
                {
                    display: (micro && !speaking) ? 'none' : 'flex',
                    backgroundColor: speaking ?  colors.BLUE_FOR_BORDER : colors.MAIN_BACKGROUND,
                }
            }
        >
            {speaking ? (
                <GraphicEqIcon className={classes.icon} style={{height: 15, width: 15}} />
            ) : (
                <MicOffIcon className={classes.icon} style={{height: 15, width: 15}} />
            )
            }
        </Box>
    )
}