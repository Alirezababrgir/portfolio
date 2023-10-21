import { Avatar, Divider, Grid, Slide,TextField ,InputAdornment,Button,CardActions,CardContent, Zoom} from "@mui/material";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Chip } from "@mui/material";
import { useTheme } from "@emotion/react";
import { grey } from "@mui/material/colors";
import emailpng from "../../assetes/world-connection-flatline-bdcc8.png";
import { Face6Rounded,SubjectRounded,EmailRounded } from "@mui/icons-material";

const ConnectMe = () => {

    const theme = useTheme();

    const [load, setload] = useState(false);
    useEffect(() => {
        setload(true);      //Mount
        return () => {
            setload(false); //unMount
        }
    }, []);



    return (

        <>
            <Helmet>
                <title>بیوگرافی من | ارتباط با من </title>
            </Helmet>
            <Box sx={{ p: 3, height: "20vh" }}>
                <Divider variant="middle" textAlign="right" sx={{ mt: 2, mb: 1, "&::before,&::after": { borderColor: "black" } }}><Slide direction="down" in={load} style={{ transitionDelay: load ? '1000ms' : '0ms' }}><Chip sx={{ color: "#111" }} label=" ارتباط با من" variant="filled" /></Slide></Divider>
            </Box>
            <Grid container sx={{ height: "80vh", }}>
            <Zoom direction="down" in={load} style={{ transitionDelay: load ? '1500ms' : '0ms' }}>
                <Grid xs={12} md={6} sx={{ display: "flex",p:4, flexWrap: "nowrap", justifyContent: "center", alignItems: "center" }}>
                    <form autoComplete="off" style={{backgroundColor: theme.palette.mode === "light" ? "#1111" : grey[800],padding:"0.5rem",borderRadius:"1rem"}}>
                        <CardContent>
                            <Grid container>
                                <Grid
                                    xs={12}
                                    sx={{ direction: "ltr" }}
                                >
                                    <Grid container >
                                        <Grid xs={12} md={5} sx={{mt:1}}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                color="primary"
                                                label="نام و نام خانوادگی"
                                                name="fullname"
                                                variant="outlined"
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment postion="end">
                                                            <Face6Rounded />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid xs={12} md={7} sx={{mt:1}}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                color="primary"
                                                label="آدرس ایمیل"
                                                name="email"
                                                variant="outlined"
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment postion="end">
                                                            <EmailRounded />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid xs={12} md={12} sx={{mt:1}}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                color="primary"
                                                label="عنوان"
                                                name="subject"
                                                variant="outlined"
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment postion="end">
                                                            <SubjectRounded />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid xs={12} md={12} sx={{mt:1}}>
                                            <TextField
                                                fullWidth
                                                multiline
                                                rows={6}
                                                size="small"
                                                color="primary"
                                                label="متن پیام"
                                                name="message"
                                                variant="outlined"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions
                            sx={{
                                alignItems: "end",
                                flexDirection: "column",
                            }}
                        >
                            <Button
                                type="submit"
                                color="info"
                                variant="contained"
                                sx={{ mt: 2 }}
                                fullWidth
                            >
                                ارسال کن
                            </Button>
                        </CardActions>
                    </form>
                </Grid>
                </Zoom>
                <Grid xs={12} md={6} sx={{display:"flex",flexWrap: "nowrap", justifyContent: "center", alignItems: "center"}}>
                    <Slide direction="down" in={load} style={{ transitionDelay: load ? '600ms' : '0ms' }}>
                    <Avatar variant="square" src={emailpng} sx={{ width: "90vh", height: "50vh", opacity: "30%" }}/>
                    </Slide>
                </Grid>
            </Grid>
        </>

    )
}
export default ConnectMe;