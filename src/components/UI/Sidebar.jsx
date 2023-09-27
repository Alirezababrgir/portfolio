import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Divider, Avatar } from '@mui/material';

const Sidebar = () => {
    return (
            <Grid item xs={0} sm={0} md={3} lg={3} xl={4} sx={{ backgroundColor: "warning.main",padding:"2rem" }}>
                <Avatar sx={{width:"200px",height:"200px",margin:"0 auto"}} variant="rounded" src='https://toplearn.com/img/user/250x259/2402cc6d-1d17-6a22-e6cc-39e3248f13a4_%D8%A7%DB%8C%D9%85%D8%A7%D9%86_%D9%85%D8%AF%D8%A7%D8%A6%D9%86%DB%8C9.jpg'/>
                <Typography sx={{ textAlign: "center",marginTop:"10px" }}>علیرضا ببرگیر</Typography>
                <Divider variant="middle"/>
                <Typography sx={{ textAlign: "center" }}> برنامه نویس </Typography>
            </Grid>
    )
}
export default Sidebar;