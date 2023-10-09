import { Box, Divider, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import CircularWithValueLabel from "./progressbar";
const About = () => {
    return (
        <>
            <Box sx={{ p: 3 }}>
                <Divider variant="middle" sx={{ mt: 2, mb: 2, "&::before,&::after": { borderColor: "black" } }}><Typography sx={{ color: "black" }}>درباره من </Typography></Divider>
            </Box>
            <Box sx={{ height: "55%", width: "90%", borderRadius: "0.5rem", margin: " 0 auto", display: "flex", justifyContent: "center", flexDirection: "row-reverse", alignItems: "center", flexWrap: "wrap" }}>
                <Card sx={{ maxWidth: 345, p: 1, mx: 4, my: 2, backgroundColor: "#9999", borderRadius: "1rem" }}>
                    <CardActionArea>
                        <CardMedia
                            sx={{ borderRadius: "2rem" }}
                            component="img"
                            height="250"
                            image="https://toplearn.com/img/user/250x259/2402cc6d-1d17-6a22-e6cc-39e3248f13a4_%D8%A7%DB%8C%D9%85%D8%A7%D9%86_%D9%85%D8%AF%D8%A7%D8%A6%D9%86%DB%8C9.jpg"
                            alt="img"
                        />
                        <CardContent>
                            <Divider sx={{ mb: 2, "&::before,&::after": { borderColor: "black" } }}><Typography sx={{ color: "black" }} >مشخصات من</Typography> </Divider>
                            <Divider textAlign="right">نام </Divider>
                            <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                عیرضا ببرگیر
                            </Typography>
                            <Divider textAlign="right">متولد </Divider>
                            <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                کرج   ۷/۱۱/۷۵
                            </Typography>
                            <Divider textAlign="right">تحصیلات </Divider>
                            <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                دیپلم تجربی
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 845, p: 1, mx: 4, my: 2, backgroundColor: "#9999", borderRadius: "1rem" }}>
                    <CardActionArea>
                        <CardContent>
                            <Divider sx={{ mb: 2, "&::before,&::after": { borderColor: "black" } }}>میزان مهارت من </Divider>
                            <Divider textAlign="right">
                                <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                    SOLIDTY
                                </Typography>
                                <CircularWithValueLabel />
                            </Divider>

                            <Divider textAlign="left">
                                <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                    JAVASCRIPT
                                </Typography>
                                <CircularWithValueLabel />
                            </Divider>
                            <Divider textAlign="right">
                                <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                    REACT.JS
                                </Typography>
                                <CircularWithValueLabel />
                            </Divider>
                            <Divider textAlign="left">
                                <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                    NEXT.JS
                                </Typography>
                                <CircularWithValueLabel />
                            </Divider>
                            <Divider textAlign="right">
                                <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                    GIT & GITHUB
                                </Typography>
                                <CircularWithValueLabel />
                            </Divider>
                            <Divider textAlign="left">
                                <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                    LINUX
                                </Typography>
                                <CircularWithValueLabel />
                            </Divider>
                            gdggsdghdgjhsdgjhdgerhuhuwehruiweiuriwueiruwieuriwueriuweiruiwueriu
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </>
    )
}
export default About;