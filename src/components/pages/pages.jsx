import SwipeableViews from 'react-swipeable-views';
import theme from "../../layuot/theme"
import { Box } from '@mui/material';
import Tabpanel from '../Tabpanel';
import Homepage from './homepage';

const Pages = ({ handleChange, value }) => {
  return (
    <SwipeableViews index={value} onChangeIndex={handleChange} axis={theme.direction === 'ltr' ? 'x-reverse' : 'x'}>
      <Tabpanel index={0}>
        <Box sx={{ height: "140vh", backgroundImage: `url(${require("../../assetes/Black-And-Grey-Wallpaper-HD-Desktop.jpg")})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: "80%" }}>
          <Homepage />
        </Box>
      </Tabpanel>
      <Tabpanel index={1}>
        <Box sx={{ height: "140vh", backgroundImage: `url(${require("../../assetes/Black-And-Grey-Wallpaper-HD-Desktop.jpg")})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: "60%" }}>
          1
        </Box>
      </Tabpanel>
      <Tabpanel index={2}>
        <Box sx={{ height: "140vh", backgroundImage: `url(${require("../../assetes/Black-And-Grey-Wallpaper-HD-Desktop.jpg")})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: "60%" }}>
          2
        </Box>
      </Tabpanel>
      <Tabpanel index={3}>
        <Box sx={{ height: "140vh", backgroundImage: `url(${require("../../assetes/Black-And-Grey-Wallpaper-HD-Desktop.jpg")})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: "60%" }}>
          3
        </Box>
      </Tabpanel>
      <Tabpanel index={4}>
      <Box sx={{ height: "140vh", backgroundImage: `url(${require("../../assetes/Black-And-Grey-Wallpaper-HD-Desktop.jpg")})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: "60%" }}>
        4
        </Box>
      </Tabpanel>
    </SwipeableViews>
  )
}
export default Pages;