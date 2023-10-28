import { Divider, Slide, Zoom } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Typed from 'react-typed';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { Part1 } from "../../layuot/particels";
import TextTransition, { presets } from 'react-text-transition';
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@emotion/react";
import { grey } from "@mui/material/colors";
const Homepage = () => {

    const theme = useTheme();
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);



    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);


    const [load, setload] = useState(false);
    useEffect(() => {
        setload(true);      //Mount
        return () => {
            setload(false); //unMount
        }
    }, []);

    const TEXTS = ['توسعه دهنده فول استک ', 'توسعه دهنده بلاکچین  ', 'عاشق لینوکس هستم'];


    return (

        <>
            <Helmet>
                <title>بیوگرافی من | صفحه اصلی</title>
            </Helmet>
            <Box sx={{ p: 3,height:"20vh" }}>
                <Particles id="tsparticles" options={Part1} init={particlesInit} loaded={particlesLoaded} />
                <Divider variant="middle" textAlign="right" sx={{ mt: 2, mb: 1, "&::before,&::after": { borderColor: "black" } }}><Slide direction="down" in={load} style={{ transitionDelay: load ? '1000ms' : '0ms' }}><Typography>سلام</Typography></Slide></Divider>
            </Box>
            <Zoom direction="up" in={load} style={{ transitionDelay: load ? '400ms' : '0ms' }}>
                <Box sx={{ height: "80vh" }}>
                    <Box sx={{ backgroundColor: theme.palette.mode === "dark" ? "#1113" : grey, height: "80%", width: "80%", borderRadius: "0.5rem", margin: " 0 auto", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                        <FingerprintIcon color={"primary"} sx={{ height: "100px", width: "100px", mb: 4 }} />
                        <Typed
                            strings={['( : سلام من علیرضا هستم']}
                            typeSpeed={40}
                        />
                        <br />
                        <Box sx={{ display: "flex" }}>
                            <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                            <Typography sx={{ mx: 0.6 }}>
                                من
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Zoom>
        </>


    )
}
export default Homepage;