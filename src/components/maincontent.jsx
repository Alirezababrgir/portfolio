import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
const Mcontent = ({children}) => {
    return (
        <Grid item xs={12} sm={12} md={9}>
            <Typography variant='"h1' sx={{ textAlign: "center" }}>item2</Typography>
            {children}
        </Grid>
    )
}
export default Mcontent;