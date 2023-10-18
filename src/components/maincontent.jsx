import Grid from '@mui/material/Unstable_Grid2';
const Mcontent = ({children}) => {
    return (
        <Grid item xs={12} sm={12} md={10} >
            {children}
        </Grid>
    )
}
export default Mcontent;