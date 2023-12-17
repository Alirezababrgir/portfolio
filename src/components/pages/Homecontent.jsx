import { SiLinux } from "react-icons/si";
import { Avatar, Box } from "@mui/material";
import TextTransition, { presets } from "react-text-transition";
import { ArrowBack } from "@mui/icons-material";

const Homecontent = ({ index }) => {


    //const theme = useTheme();


    const TEXTS = ['توسعه دهنده فول استک ', 'توسعه دهنده بلاکچین  ', 'عاشق لینوکس هستم '];


    return (
        <Box class="card">
            <Box class="thumbnail scale-up-center "><Avatar class="left" src="https://toplearn.com/img/user/250x259/2402cc6d-1d17-6a22-e6cc-39e3248f13a4_%D8%A7%DB%8C%D9%85%D8%A7%D9%86_%D9%85%D8%AF%D8%A7%D8%A6%D9%86%DB%8C9.jpg" /></Box>
            <Box class="right">
                <h1>
                    <ArrowBack/>
                    <TextTransition style={{ fontSize: "30px" }} springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                </h1>
            </Box>
            <h5 className="bounce-in-top"><SiLinux /></h5>
            <p className="h6 bounce-in-top">DECENTRALIZE THE WEB !</p>
        </Box>
    )
}
export default Homecontent;