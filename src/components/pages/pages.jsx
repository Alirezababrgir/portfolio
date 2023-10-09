import SwipeableViews from 'react-swipeable-views';
import theme from "../../layuot/theme"
import { Box } from '@mui/material';
import Tabpanel from '../Tabpanel';
import Homepage from './homepage';
import About from './aboutpage';
const Pages = ({ handleChange, value }) => {
  return (
    <SwipeableViews index={value} onChangeIndex={handleChange} axis={theme.direction === 'ltr' ? 'x-reverse' : 'x'}>
      <Tabpanel index={0}>
        <Box sx={{ height: "140vh"}}>
          <Homepage />
        </Box>
      </Tabpanel>
      <Tabpanel index={1}>
        <Box >
          1
        </Box>
      </Tabpanel>
      <Tabpanel index={2}>
        <Box>
          2
        </Box>
      </Tabpanel>
      <Tabpanel index={3}>
        <Box>
          <About/>
        </Box>
      </Tabpanel>
      <Tabpanel index={4}>
      <Box>
        4
        </Box>
      </Tabpanel>
    </SwipeableViews>
  )
}
export default Pages;