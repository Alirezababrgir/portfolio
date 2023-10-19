import SwipeableViews from 'react-swipeable-views';
import theme from "../../layuot/theme"
import { Box } from '@mui/material';
import Tabpanel from '../Tabpanel';
import Homepage from './homepage';
import About from './aboutpage';
import Resoume from './resoumepage';
import Projects from './projects';
import ConnectMe from './ConnectMe';
const Pages = ({ handleChange, value }) => {
  return (
    <SwipeableViews index={value} onChangeIndex={handleChange} axis={theme.direction === 'ltr' ? 'x-reverse' : 'x'}>
      <Tabpanel index={0}>
        <Box sx={{ height: "140vh" }}>
          <Homepage />
        </Box>
      </Tabpanel>
      <Tabpanel index={1}>
        <Box >
          <About />
        </Box>
      </Tabpanel>
      <Tabpanel index={2}>
        <Box>
          <Projects />
        </Box>
      </Tabpanel>
      <Tabpanel index={3}>
        <Box>
          <Resoume />
        </Box>
      </Tabpanel>
      <Tabpanel index={4}>
        <Box>
          <ConnectMe />
        </Box>
      </Tabpanel>
    </SwipeableViews>
  )
}
export default Pages;