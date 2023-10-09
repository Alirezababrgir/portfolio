import { Box, Divider, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
const About = () => {
    return (
        <>
            <Box sx={{ p: 2 }}>
                <Typography sx={{ color: "#2196f3" }}>درباره من </Typography>
                <Divider variant="middle" sx={{ mt: 2, mb: 4 }} color={blue[500]} />
            </Box>
            <Box sx={{height: "55%", width: "90%", borderRadius: "0.5rem", margin: " 0 auto", display: "flex", justifyContent: "center", flexDirection:"row-reverse", alignItems: "center",flexWrap:"wrap"}}>
                <Card sx={{ maxWidth: 345,p:2, mx: 4,my:2, backgroundColor: "silver",borderRadius:"1rem" }}>
                    <CardActionArea>
                        <CardMedia
                        sx={{borderRadius:"2rem"}}
                            component="img"
                            height="250"
                            image="https://toplearn.com/img/user/250x259/2402cc6d-1d17-6a22-e6cc-39e3248f13a4_%D8%A7%DB%8C%D9%85%D8%A7%D9%86_%D9%85%D8%AF%D8%A7%D8%A6%D9%86%DB%8C9.jpg"
                            alt="img"
                        />
                        <CardContent>
                            <Divider>نام </Divider>
                            <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                عیرضا ببرگیر
                            </Typography>
                            <Divider>متولد </Divider>
                            <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                کرج   ۷/۱۱/۷۵
                            </Typography>
                            <Divider>تحصیلات </Divider>
                            <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                دیپلم تجربی
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345,p:2, mx: 4,my:2, backgroundColor: "silver",borderRadius:"1rem" }}>
                    <CardActionArea>
                        <CardMedia
                        sx={{borderRadius:"2rem"}}
                            component="img"
                            height="250"
                            image="https://toplearn.com/img/user/250x259/2402cc6d-1d17-6a22-e6cc-39e3248f13a4_%D8%A7%DB%8C%D9%85%D8%A7%D9%86_%D9%85%D8%AF%D8%A7%D8%A6%D9%86%DB%8C9.jpg"
                            alt="img"
                        />
                        <CardContent>
                            <Divider>نام </Divider>
                            <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                عیرضا ببرگیر
                            </Typography>
                            <Divider>متولد </Divider>
                            <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                کرج   ۷/۱۱/۷۵
                            </Typography>
                            <Divider>تحصیلات </Divider>
                            <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                دیپلم تجربی
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345,p:2, mx: 4, my:2,backgroundColor: "silver",borderRadius:"1rem" }}>
                    <CardActionArea>
                        <CardMedia
                        sx={{borderRadius:"2rem"}}
                            component="img"
                            height="250"
                            image="https://toplearn.com/img/user/250x259/2402cc6d-1d17-6a22-e6cc-39e3248f13a4_%D8%A7%DB%8C%D9%85%D8%A7%D9%86_%D9%85%D8%AF%D8%A7%D8%A6%D9%86%DB%8C9.jpg"
                            alt="img"
                        />
                        <CardContent>
                            <Divider>نام </Divider>
                            <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                عیرضا ببرگیر
                            </Typography>
                            <Divider>متولد </Divider>
                            <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                کرج   ۷/۱۱/۷۵
                            </Typography>
                            <Divider>تحصیلات </Divider>
                            <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                دیپلم تجربی
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </>
    )
}
export default About;