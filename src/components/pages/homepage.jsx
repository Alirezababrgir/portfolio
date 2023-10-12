import { Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Typed from 'react-typed';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { Part1 } from "../../particels/particels";
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';
import TextTransition, { presets } from 'react-text-transition';
import { useEffect, useState } from "react";

const Homepage = () => {


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
    const TEXTS = ['توسعه دهنده فول استک ', 'توسعه دهنده بلاکچین  ', 'عاشق لینوکس هستم'];


    return (

        <>
            <Box sx={{ p: 3 }}>
                <Particles id="tsparticles" options={Part1} init={particlesInit} loaded={particlesLoaded} />
                <Divider variant="middle" textAlign="right" sx={{ mt: 2, mb: 2, "&::before,&::after": { borderColor: "black" } }}><Typography sx={{ color: "black" }}>سلام <WavingHandRoundedIcon sx={{ fontSize: "larger" }} /> </Typography></Divider>
            </Box>
            <Box sx={{ backgroundColor: "#2222", height: "40%", width: "60%", borderRadius: "0.5rem", margin: " 0 auto", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", mt: 8 }}>
                <FingerprintIcon color={"primary"} sx={{ height: "100px", width: "100px", mb: 4 }} />
                <Typed
                    strings={['( : سلام من علیرضا هستم']}
                    typeSpeed={40}
                />
                <br />
                <Box sx={{ display: "flex" }}>
                    <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                    <Typography sx={{ mx: 0.6}}>
                        من 
                    </Typography>
                </Box>
            </Box>
        </>


    )
}
export default Homepage;