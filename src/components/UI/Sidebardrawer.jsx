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
import PowerRoundedIcon from '@mui/icons-material/PowerRounded';
import Fab from '@mui/material/Fab';
import { Box } from '@mui/material';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';

const Sidebardrawer = ({ value, handleChange,handlechangetoggle}) => {
    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`,
        }
    };
    return (
        <Grid id="Gr" item md={3} sx={{ backgroundColor: "gray.main", padding: "2rem", borderRight: `4px solid #777` }} color={grey[100]}>
            <Box sx={{ display: { xs: "block", md: "none" }, m: 2 }}>
                <Fab onClick={handlechangetoggle} variant="extended" color='primary' size="large" aria-label='sidebar'>
                    <KeyboardDoubleArrowLeftRoundedIcon/>
                </Fab>
            </Box>
            <Avatar sx={{ width: "110px", height: "110px", margin: "0 auto" }} variant="circular" src='https://toplearn.com/img/user/250x259/2402cc6d-1d17-6a22-e6cc-39e3248f13a4_%D8%A7%DB%8C%D9%85%D8%A7%D9%86_%D9%85%D8%AF%D8%A7%D8%A6%D9%86%DB%8C9.jpg' />
            <Divider variant="middle" sx={{ mt: 4, mb: 2, color: "white" }} color={grey[600]} />
            <Typography variant="caption" sx={{ textAlign: "center" }} color={grey[500]}>توسعه دهنده فول استک وب</Typography>
            <br />
            <Typography variant="subtitle2" sx={{ textAlign: "center" }} color={grey[500]}>FULL STACK WEB(2,3) DEVELOPER</Typography>
            <Divider variant="middle" sx={{ mt: 2, mb: 2, color: "white" }} color={grey[600]} />
            <Tabs onChange={handleChange} value={value} aria-label="icon label tabs example" orientation="vertical" allowScrollButtonsMobile scrollButtons="auto">
                <Tab icon={<HomeRoundedIcon />} iconPosition='start' label="خانه"{...tabProps(0)} />
                <Tab icon={<TextSnippetRoundedIcon />} iconPosition='start' label="رزومه  "{...tabProps(1)} />
                <Tab icon={<TerminalRoundedIcon />} iconPosition='start' label="نمونه کارها"{...tabProps(2)} />
                <Tab icon={<Groups2RoundedIcon />} iconPosition='start' label="درباره من"{...tabProps(3)} />
                <Tab icon={<PowerRoundedIcon />} iconPosition='start' label=" ارتباط با من"{...tabProps(4)} />
            </Tabs>
            <Divider variant="middle" sx={{ mt: 2, mb: 2, color: "white" }} color={grey[600]} />
            <Typography variant="subtitle2" sx={{ textAlign: "center" }} color={grey[700]}>توسعه یافته توسط zakhar <CopyrightIcon sx={{ color: grey[500] }} /> </Typography>
        </Grid>
    )
}
export default Sidebardrawer;