import { Box, Divider, Slide, Typography, Chip } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { CircularWithValueLabel } from "./progressbar";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import {
    SiSolidity,
    SiNodedotjs,
    SiReact,
    SiHtml5,
    SiCss3,
    SiGit,
    SiGithub,
    SiRedux,
    SiMongodb,
    SiJavascript,
    SiMaterialdesign,
    SiBootstrap,
    SiTailwindcss,
    SiLinux,
    SiIntellijidea,
    SiMysql,
    SiNextdotjs,
    SiWeb3Dotjs,
    SiAlchemy,
    SiVisualstudiocode,

} from "react-icons/si";



const About = () => {
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
                <title> بیوگرافی من | مهارت من  </title>
            </Helmet>
            <Box sx={{ p: 3 }}>
                <Divider variant="middle" textAlign="right" sx={{ mt: 2, mb: 1, "&::before,&::after": { borderColor: "black" } }}><Slide direction="down" in={load} style={{ transitionDelay: load ? '1000ms' : '0ms' }}><Chip color="info" sx={{ color: "black" }} label="مهارت ها" variant="outlined" /></Slide></Divider>
            </Box>
            <Box sx={{ height: "55%", width: "90%", borderRadius: "0.5rem", margin: " 0 auto", display: "flex", justifyContent: "center", flexDirection: "row-reverse", alignItems: "center", flexWrap: "wrap" }}>
                <Slide direction="down" in={load} style={{ transitionDelay: load ? '600ms' : '0ms' }}>
                    <Card sx={{ maxWidth: 800, width: 390, height: 560, p: 0.5, mx: 4, my: 2, backgroundColor: theme.palette.mode === "light" ? "#999" : grey[900], borderRadius: "0.5rem" }}>
                        <CardActionArea>
                            <CardContent>
                                <Divider sx={{ mb: 1.5, "&::before,&::after": { borderColor: "text.primary" } }}>  Languages  </Divider>
                                <Divider textAlign="right">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        <SiHtml5 />  Html <SiCss3 />css
                                    </Typography>
                                    <CircularWithValueLabel value={70} c={"info"} />
                                </Divider>
                                <Divider textAlign="left">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Node.js <SiNodedotjs />
                                    </Typography>
                                    <CircularWithValueLabel value={85} c={"info"} />
                                </Divider>
                                <Divider textAlign="right">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Javascript <SiJavascript />
                                    </Typography>
                                    <CircularWithValueLabel value={85} c={"info"} />
                                </Divider>
                                <Divider textAlign="left">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Solidity <SiSolidity />
                                    </Typography>
                                    <CircularWithValueLabel value={70} c={"info"} />
                                </Divider>
                                <Divider sx={{ mb: 1.5, mt: 1.5, "&::before,&::after": { borderColor: "text.primary" } }}>  Database </Divider>
                                <Divider textAlign="right">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Mongodb <SiMongodb />
                                    </Typography>
                                    <CircularWithValueLabel value={65} c={"success"} />
                                </Divider>
                                <Divider textAlign="left">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Mysql <SiMysql />
                                    </Typography>
                                    <CircularWithValueLabel value={45} c={"success"} />
                                </Divider>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Slide>
                <Slide direction="down" in={load} style={{ transitionDelay: load ? '500ms' : '0ms' }}>

                    <Card sx={{ maxWidth: 1000, width: 390, height: 560, p: 0.5, mx: 4, my: 2, backgroundColor: theme.palette.mode === "light" ? "#999" : grey[900], borderRadius: "0.5rem" }}>
                        <CardActionArea>
                            <CardContent>
                                <Divider sx={{ mb: 1.5, "&::before,&::after": { borderColor: "text.primary" } }}>   FrameWorks (web2) </Divider>
                                <Divider textAlign="right">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        React.js <SiReact />
                                    </Typography>
                                    <CircularWithValueLabel value={70} c={"primary"} />
                                </Divider>
                                <Divider textAlign="left">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Redux <SiRedux />
                                    </Typography>
                                    <CircularWithValueLabel value={70} c={"primary"} />
                                </Divider>
                                <Divider textAlign="right">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Next.js <SiNextdotjs />
                                    </Typography>
                                    <CircularWithValueLabel value={85} c={"primary"} />
                                </Divider>
                                <Divider sx={{ mb: 1.5, mt: 1.5, "&::before,&::after": { borderColor: "text.primary" } }}>  Design By </Divider>
                                <Divider textAlign="left">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Material-ui <SiMaterialdesign />
                                    </Typography>
                                    <CircularWithValueLabel value={85} c={"secondary"} />
                                </Divider>
                                <Divider textAlign="right">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Tailwind.css <SiTailwindcss />
                                    </Typography>
                                    <CircularWithValueLabel value={70} c={"secondary"} />
                                </Divider>
                                <Divider textAlign="left">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Bootstrap <SiBootstrap />
                                    </Typography>
                                    <CircularWithValueLabel value={65} c={"secondary"} />
                                </Divider>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Slide>
                <Slide direction="down" in={load} style={{ transitionDelay: load ? '400ms' : '0ms' }}>

                    <Card sx={{ maxWidth: 1000, width: 390, height: 560, p: 0.5, mx: 4, my: 2, backgroundColor: theme.palette.mode === "light" ? "#999" : grey[900], borderRadius: "0.5rem" }}>
                        <CardActionArea>
                            <CardContent>
                                <Divider sx={{ mb: 1.5, "&::before,&::after": { borderColor: "text.primary" } }}>  FrameWorks (web3)  </Divider>
                                <Divider textAlign="right">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Web3.js <SiWeb3Dotjs />
                                    </Typography>
                                    <CircularWithValueLabel value={70} c={"warning"} />
                                </Divider>
                                <Divider textAlign="left">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Hardhat
                                    </Typography>
                                    <CircularWithValueLabel value={85} c={"warning"} />
                                </Divider>
                                <Divider textAlign="right">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Truffle
                                    </Typography>
                                    <CircularWithValueLabel value={85} c={"warning"} />
                                </Divider>
                                <Divider sx={{ mb: 1.5, mt: 1.5, "&::before,&::after": { borderColor: "text.primary" } }}> Nodes </Divider>
                                <Divider textAlign="left">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Alchemy <SiAlchemy />
                                    </Typography>
                                    <CircularWithValueLabel value={98} c={"success"} />
                                </Divider>
                                <Divider textAlign="right">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Infura
                                    </Typography>
                                    <CircularWithValueLabel value={98} c={"success"} />
                                </Divider>
                                <Divider textAlign="left">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Ganache
                                    </Typography>
                                    <CircularWithValueLabel value={98} c={"success"} />
                                </Divider>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Slide>
                <Slide direction="down" in={load} style={{ transitionDelay: load ? '300ms' : '0ms' }}>

                    <Card sx={{ maxWidth: 1000, width: 390, height: 560, p: 0.5, mx: 4, my: 2, backgroundColor: theme.palette.mode === "light" ? "#999" : grey[900], borderRadius: "0.5rem" }}>
                        <CardActionArea>
                            <CardContent>
                                <Divider sx={{ mb: 1.5, "&::before,&::after": { borderColor: "text.primary" } }}>  OS  </Divider>
                                <Divider textAlign="right">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Linux <SiLinux />
                                    </Typography>
                                    <CircularWithValueLabel value={70} c={"success"} />
                                </Divider>
                                <Divider sx={{ mb: 2.5, mt: 2.5, "&::before,&::after": { borderColor: "text.primary" } }}>  IDE  </Divider>
                                <Divider textAlign="right">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        VisualStaduioCode <SiVisualstudiocode />
                                    </Typography>
                                    <CircularWithValueLabel value={85} c={"primary"} />
                                </Divider>
                                <Divider textAlign="left">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Intelij <SiIntellijidea />
                                    </Typography>
                                    <CircularWithValueLabel value={70} c={"primary"} />
                                </Divider>
                                <Divider sx={{ mb: 1.5, mt: 1.5, "&::before,&::after": { borderColor: "text.primary" } }}> Version Controlers </Divider>
                                <Divider textAlign="right">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Github <SiGithub />
                                    </Typography>
                                    <CircularWithValueLabel value={65} c={"error"} />
                                </Divider>
                                <Divider textAlign="left">
                                    <Typography variant="body2" color="text.secondary" sx={{ p: 0.5 }}>
                                        Git <SiGit />
                                    </Typography>
                                    <CircularWithValueLabel value={45} c={"error"} />
                                </Divider>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Slide>
            </Box>
        </>
    )
}
export default About;