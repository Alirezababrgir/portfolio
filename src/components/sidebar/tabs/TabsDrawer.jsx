import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded';
import PowerRoundedIcon from '@mui/icons-material/PowerRounded';
import { useContext } from 'react';
import MYcontext from '../../../context/context';

const TabsDrawer = ({ handleChange }) => {

    const { value, setdraweropen } = useContext(MYcontext);

    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`,
        }
    };
    return (
        <Tabs onChange={handleChange} value={value} aria-label="icon label tabs example" orientation="vertical" allowScrollButtonsMobile scrollButtons="auto">
            <Tab icon={<HomeRoundedIcon />} iconPosition='start' label="خانه" sx={{ "&.MuiTab-root": { minHeight: 40 }, backgroundColor: "silver", borderRadius: "4px", m: 1 }} onClick={() => setdraweropen(false)}{...tabProps(0)} />
            <Tab icon={<TextSnippetRoundedIcon />} iconPosition='start' label="رزومه  " sx={{ "&.MuiTab-root": { minHeight: 40 }, backgroundColor: "silver", borderRadius: "4px", m: 1 }} onClick={() => setdraweropen(false)}{...tabProps(1)} />
            <Tab icon={<TerminalRoundedIcon />} iconPosition='start' label="نمونه کارها" sx={{ "&.MuiTab-root": { minHeight: 40 }, backgroundColor: "silver", borderRadius: "4px", m: 1 }} onClick={() => setdraweropen(false)}{...tabProps(2)} />
            <Tab icon={<Groups2RoundedIcon />} iconPosition='start' label="درباره من" sx={{ "&.MuiTab-root": { minHeight: 40 }, backgroundColor: "silver", borderRadius: "4px", m: 1 }} onClick={() => setdraweropen(false)}{...tabProps(3)} />
            <Tab icon={<PowerRoundedIcon />} iconPosition='start' label=" ارتباط با من" sx={{ "&.MuiTab-root": { minHeight: 40 }, backgroundColor: "silver", borderRadius: "4px", m: 1 }} onClick={() => setdraweropen(false)}{...tabProps(4)} />
        </Tabs>
    )
}
export default TabsDrawer;