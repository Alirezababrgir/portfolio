import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Divider, Avatar, Box } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { grey } from '@mui/material/colors';
import TaBs from './tabs/Tabs';
import { RandomReveal } from 'react-random-reveal'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Sidebar = ({ handleChange }) => {
    return (
        <Grid id="Gr" item md={3} sx={{ backgroundColor: "#444", padding: "1.4rem", display: { xs: "none", md: "block" }, borderRight: "4px solid silver", mx: 0, borderBottom: "4px solid silver", borderRadius: "4px" }} color={grey[100]}>
            <Avatar sx={{ width: "150px", height: "150px", margin: "0 auto", display: { xs: "none", md: "block", outline: "double 3.5px #03a9f4" } }} variant="circular" src='https://toplearn.com/img/user/250x259/2402cc6d-1d17-6a22-e6cc-39e3248f13a4_%D8%A7%DB%8C%D9%85%D8%A7%D9%86_%D9%85%D8%AF%D8%A7%D8%A6%D9%86%DB%8C9.jpg' />
            <Divider variant="middle" sx={{ mt: 2, mb: 1, color: "white" }} color={grey[600]} />
            <Typography variant="subtitle1" sx={{ textAlign: "center" }} color={grey[500]}>
                <RandomReveal isPlaying duration={4} characters="FULL STACK DEVELOPER" />
            </Typography>
            <Divider variant="middle" sx={{ mt: 1, mb: 2, color: "white" }} color={grey[600]} />
            <TaBs handleChange={handleChange} />
            <Divider variant="middle" sx={{ mt: 2, mb: 1, color: "white" }} color={grey[600]} />
            <Box sx={{ m: 0 }}>
                <a href='https://www.babrgiralireza@gmail.com' rel="noreferrer noopener" target="_blank" >
                    <EmailIcon sx={{ color: "grey", mx: 1 }} />
                </a>
                <a href='https://www.github.com/alirezababrgir' rel="noreferrer noopener" target="_blank" >
                    <GitHubIcon sx={{ color: "grey", mx: 1 }} />
                </a>
                <a href='https://www.instagram.com/__zakhar___/' rel="noreferrer noopener" target="_blank" >
                    <InstagramIcon sx={{ color: "grey", mx: 1 }} />
                </a>
                <a href='https://www.likedin.com/alirezababrgir' rel="noreferrer noopener" target="_blank" >
                    <LinkedInIcon sx={{ color: "grey", mx: 1 }} />
                </a>
            </Box>
            <Divider variant="middle" sx={{ mt: 0.5, mb: 1, color: "white" }} color={grey[600]} />
            <Typography variant="subtitle2" sx={{ textAlign: "center" }} color={grey[700]}>توسعه یافته توسط zakhar <CopyrightIcon sx={{ color: grey[500] }} /> </Typography>
        </Grid >
    )
}
export default Sidebar;