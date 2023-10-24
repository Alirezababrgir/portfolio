import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded';
import PowerRoundedIcon from '@mui/icons-material/PowerRounded';
import { useContext } from 'react';
import MYcontext from '../../../context/context';
import { grey } from '@mui/material/colors';
import { useTheme } from '@emotion/react';
import { SiTarget } from 'react-icons/si';

const TabsDrawer = ({ handleChange }) => {
    const theme = useTheme();
    const { value, setdraweropen } = useContext(MYcontext);

    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`,
        }
    };
    const tabs = [
        { label: "خانه", icon: <HomeRoundedIcon />, ...tabProps(0) },
        { label: " مهارت ها", icon: <SiTarget />, ...tabProps(1) },
        { label: "نمونه کارها", icon: <TerminalRoundedIcon />, ...tabProps(2) },
        { label: "رزومه ", icon: <TextSnippetRoundedIcon />, ...tabProps(3) },
        { label: " ارتباط با من", icon: <PowerRoundedIcon />, ...tabProps(4) }
    ];


    return (

        <Tabs onChange={handleChange} value={value} aria-label="icon label tabs example" orientation="vertical" allowScrollButtonsMobile scrollButtons="auto">
            {tabs.map((tab, index) => (
                <Tab key={index} icon={tab.icon} iconPosition='start' label={tab.label} sx={{ "&.MuiTab-root": { minHeight: 50 }, backgroundColor: theme.palette.mode === "light" ? "#999" : grey[700], borderRadius: "4px", m: 1 }} onClick={() => setdraweropen(false)}{...tab} />
            ))}
        </Tabs>
    )
}
export default TabsDrawer;