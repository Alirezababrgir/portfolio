import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Divider, Avatar } from '@mui/material';

const Sidebar = () => {
    return (
            <Grid item md={3} sx={{ backgroundColor: "warning.main",padding:"2rem" ,display:{xs:"none",md:"block"}}}>
                <Avatar sx={{width:"150px",height:"150px",margin:"0 auto",display:{xs:"none",md:"block"}}} variant="rounded" src='https://toplearn.com/img/user/250x259/2402cc6d-1d17-6a22-e6cc-39e3248f13a4_%D8%A7%DB%8C%D9%85%D8%A7%D9%86_%D9%85%D8%AF%D8%A7%D8%A6%D9%86%DB%8C9.jpg'/>
                <Typography sx={{ textAlign: "center",marginTop:"10px" }}>علیرضا ببرگیر</Typography>
                <Divider variant="middle"/>
                <Typography   variant="caption"sx={{ textAlign: "center" }}> برنامه نویس </Typography>
            </Grid>
    )
}
export default Sidebar;