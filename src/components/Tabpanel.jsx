import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import MYcontext from "../context/context"
const Tabpanel = ({ children, index, ...others }) => {
  
  const {value}=useContext(MYcontext);

    return (
        <div
        id={`sidebar-tab-${index}`}
        hidden={index!==value}
        aria-labelledby={`tabpanel-${index}`}
        {...others}
        >
          {value===index &&(
          <Box sx={{p:3}}>
            <Typography>
            {children}
            </Typography>
          </Box>
          )}
        </div>

    )
}
export default Tabpanel;