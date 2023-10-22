import { Avatar, Divider, Grid, Slide, TextField, InputAdornment, Button, CardActions, CardContent, Zoom, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Chip } from "@mui/material";
import { useTheme } from "@emotion/react";
import { grey } from "@mui/material/colors";
import emailpng from "../../assetes/world-connection-flatline-bdcc8.png";
import { Face6Rounded, SubjectRounded, EmailRounded } from "@mui/icons-material";
import { useFormik } from 'formik';
import { userSchema } from "./validation/FormSchema";
import ReCAPTCHA from "react-google-recaptcha";

const ConnectMe = () => {
  

    const inputstrings = {
        fullname: '',
        email: '',
        subject: '',
        message: '',
        recaptcha: ""
    }
    const formik = useFormik({
        initialValues: inputstrings,
        onSubmit: (values) => { console.log("formic values:", values) },
        validationSchema: userSchema
    });


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
                <Divider variant="middle" textAlign="right" sx={{ mt: 2, mb: 1, "&::before,&::after": { borderColor: "black" } }}><Slide direction="down" in={load} style={{ transitionDelay: load ? '1000ms' : '0ms' }}><Chip color="info" sx={{ color: "primary" }} label=" ارتباط با من" variant="filled" /></Slide></Divider>
            </Box>
            <Grid container sx={{ height: "80vh", }}>
                <Zoom direction="down" in={load} style={{ transitionDelay: load ? '1500ms' : '0ms' }}>
                    <Grid xs={12} lg={6} sx={{ display: "flex", p: 4, flexWrap: "nowrap", justifyContent: "center", alignItems: "center" }}>
                        <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ backgroundColor: theme.palette.mode === "light" ? "#999" : grey[800], padding: "0.5rem", borderRadius: "0.5rem" }}>
                            <CardContent>
                                <Grid container>
                                    <Grid
                                        xs={12}
                                        sx={{ direction: "ltr" }}
                                    >
                                        <Grid container >
                                            <Grid xs={12} md={5} sx={{ mt: 1 }}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    color="primary"
                                                    label="نام و نام خانوادگی"
                                                    name={"fullname"}
                                                    helperText={formik.touched.fullname ? formik.errors.fullname : null}
                                                    error={Boolean(formik.touched.fullname && formik.errors.fullname)}
                                                    value={formik.values?.fullname}
                                                    onChange={formik.handleChange}
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
                                            <Grid xs={12} md={7} sx={{ mt: 1 }}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    color="primary"
                                                    label="آدرس ایمیل"
                                                    name={"email"}
                                                    helperText={formik.touched.email ? formik.errors.email : null}
                                                    error={Boolean(formik.touched.email && formik.errors.email)}
                                                    value={formik.values?.email}
                                                    onChange={formik.handleChange}
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
                                            <Grid xs={12} md={12} sx={{ mt: 1 }}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    color="primary"
                                                    label="عنوان"
                                                    name={"subject"}
                                                    helperText={formik.touched.subject ? formik.errors.subject : null}
                                                    error={Boolean(formik.touched.subject && formik.errors.subject)}
                                                    value={formik.values?.subject}
                                                    onChange={formik.handleChange}
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
                                            <Grid xs={12} md={12} sx={{ mt: 1 }}>
                                                <TextField
                                                    fullWidth
                                                    multiline
                                                    rows={6}
                                                    size="small"
                                                    color="primary"
                                                    label="متن پیام"
                                                    name={"message"}
                                                    helperText={formik.touched.message ? formik.errors.message : null}
                                                    error={Boolean(formik.touched.message && formik.errors.message)}
                                                    value={formik.values?.message}
                                                    onChange={formik.handleChange}
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
                                <ReCAPTCHA
                                    sitekey={process.env.REACT_APP_PUBLICKKEY}
                                    theme={theme.palette.mode}
                                    hl="fa"
                                    onChange={(value) => { formik.setFieldValue("recaptcha", value) }}
                                />
                                {formik.errors.recaptcha && formik.touched.recaptcha ? (
                                    <Typography sx={{ fontSize: "10px" }} color={"error"}>
                                        {formik.errors.recaptcha}
                                    </Typography>) : null}
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
                <Grid xs={12} lg={6} sx={{ display: "flex", flexWrap: "nowrap", justifyContent: "center", alignItems: "center" }}>
                    <Slide direction="down" in={load} style={{ transitionDelay: load ? '600ms' : '0ms' }}>
                        <Avatar variant="square" src={emailpng} sx={{ width: "90vh", height: "50vh", opacity: "30%" }} />
                    </Slide>
                </Grid>
            </Grid>
          
        </>

    )
}
export default ConnectMe;