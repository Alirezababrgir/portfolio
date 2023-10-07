import SwipeableViews from 'react-swipeable-views';
import theme from "../../layuot/theme"
import { Typography,Box } from '@mui/material';
import Tabpanel from '../Tabpanel';

const Pages=({handleChange,value})=>{
    return(
        <SwipeableViews index={value} onChangeIndex={handleChange} axis={theme.direction === 'ltr' ? 'x-reverse' : 'x'}>
        <Tabpanel index={0}>
          <Box sx={{height:"140vh", backgroundImage: `url(${require("../../assetes/Black-And-Grey-Wallpaper-HD-Desktop.jpg")})`, backgroundRepeat: "no-repeat", backgroundSize:"cover",opacity:"40%"}}>
          <Typography sx={{ color: "whitesmoke" }}>
            home
          </Typography>
          </Box>
        </Tabpanel>
        <Tabpanel index={1}>
       1
        </Tabpanel>
        <Tabpanel index={2}>
          2
        </Tabpanel>
        <Tabpanel index={3}>
          3
        </Tabpanel>
        <Tabpanel index={4}>
          4
        </Tabpanel>
        </SwipeableViews>
    )
}
export default Pages;