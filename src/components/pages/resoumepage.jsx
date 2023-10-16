import { Box,Divider,Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import MYtimeline  from "./resoumetimeline"
const Resoume = () => {
    return (
        <>
            <Helmet>
                <title>بیوگرافی من |  رزومه من</title>
            </Helmet>
            <Box sx={{ p: 3 }}>
                <Divider variant="middle" textAlign="right" sx={{ mt: 2, mb: 2, "&::before,&::after": { borderColor: "black" } }}><Typography sx={{ color: "black" }}>رزومه </Typography></Divider>
            </Box>
            <MYtimeline/>
         
        </>

    )
}
export default Resoume;