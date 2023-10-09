import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Divider, Avatar } from '@mui/material';
import { grey } from '@mui/material/colors';
import CopyrightIcon from '@mui/icons-material/Copyright';
import TaBs from './tabs/Tabs';

const Sidebar = ({ handleChange }) => {
    return (
        <Grid id="Gr" item md={3} sx={{backgroundColor: "#6666", padding: "1.4rem", display: { xs: "none", md: "block" }, borderRight: "4px solid silver",mx:0, borderBottom: "4px solid silver", borderRadius: "4px" ,overflowY:"auto"}} color={grey[100]}>
            <Avatar sx={{ width: "160px", height: "160px", margin: "0 auto", display: { xs: "none", md: "block", outline: "double 3.5px #03a9f4" } }} variant="circular" src='https://toplearn.com/img/user/250x259/2402cc6d-1d17-6a22-e6cc-39e3248f13a4_%D8%A7%DB%8C%D9%85%D8%A7%D9%86_%D9%85%D8%AF%D8%A7%D8%A6%D9%86%DB%8C9.jpg' />
            <Divider variant="middle" sx={{ mt: 4, mb: 1, color: "white" }} color={grey[600]} />
            <Typography variant="subtitle1" sx={{ textAlign: "center" }} color={grey[500]}>توسعه دهنده فول استک وب</Typography>
            <Divider variant="middle" sx={{ mt: 1, mb: 2, color: "white" }} color={grey[600]} />
            <TaBs handleChange={handleChange}/>
            <Divider variant="middle" sx={{ mt: 2, mb: 2, color: "white" }} color={grey[600]} />
            <Typography variant="subtitle2" sx={{ textAlign: "center" }} color={grey[700]}>توسعه یافته توسط zakhar <CopyrightIcon sx={{ color: grey[500] }} /> </Typography>
        </Grid>
    )
}
export default Sidebar;