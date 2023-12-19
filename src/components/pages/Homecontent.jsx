import { SiBitcoin } from "react-icons/si";
import { Avatar, Box } from "@mui/material";
import TextTransition, { presets } from "react-text-transition";
import { ArrowBack } from "@mui/icons-material";
import img1 from "../../assetes/tuxpi.com.1702903496.png"

const Homecontent = ({ index }) => {


    //const theme = useTheme();


    const TEXTS = ['توسعه دهنده فول استک ', 'توسعه دهنده بلاکچین  ', 'عاشق لینوکس هستم '];


    return (
        <Box class="card">
            <Box class="thumbnail scale-up-center ">
                <Avatar class="left" src={img1} />
            </Box>
            <Box class="right">
                <h1>
                    <ArrowBack />
                    <TextTransition style={{ fontSize: "35px" }} springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                </h1>
            </Box>
            <h5 className="bounce-in-top h5"><SiBitcoin /></h5>
            <p className="h6 tracking-in-contract-bck">DECENTRALIZE THE WORLD!</p>
        </Box>
    )
}
export default Homecontent;