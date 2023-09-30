import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Divider, Avatar } from '@mui/material';
import { grey } from '@mui/material/colors';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Sidebar = () => {
    return (
        <Grid id="Gr"item md={3} sx={{ backgroundColor: "gray.main", padding: "2rem", display: { xs: "none", md: "block" } }} color={grey[200]}>
            <Avatar sx={{ width: "150px", height: "150px", margin: "0 auto", display: { xs: "none", md: "block" } }} variant="circular" src='https://toplearn.com/img/user/250x259/2402cc6d-1d17-6a22-e6cc-39e3248f13a4_%D8%A7%DB%8C%D9%85%D8%A7%D9%86_%D9%85%D8%AF%D8%A7%D8%A6%D9%86%DB%8C9.jpg' />
            <Divider variant="middle" sx={{ mt: 4, mb: 2, color: "white" }} color={grey[600]} />
            <Typography variant="caption" sx={{ textAlign: "center" }} color={grey[500]}> توسعه دهنده فول استک وب  </Typography>
            <Divider variant="middle" sx={{ mt: 2, mb: 2, color: "white" }} color={grey[600]} />
            <Tabs  aria-label="icon label tabs example" orientation="vertical">
                <Tab icon={<HomeRoundedIcon/>} iconPosition='start' label="خانه" />
                <Tab icon={<TextSnippetRoundedIcon/>} iconPosition='start' label="رزومه من " />
                <Tab icon={<TerminalRoundedIcon />}  iconPosition='start' label="نمونه کارها" />
                <Tab icon={<Groups2RoundedIcon />} iconPosition='start' label="درباره من" />
            </Tabs>
            <Typography variant="caption" sx={{ textAlign: "center" }} color={grey[700]}>توسعه یافته توسط zakhar <CopyrightIcon/> </Typography>
        </Grid>
    )
}
export default Sidebar;