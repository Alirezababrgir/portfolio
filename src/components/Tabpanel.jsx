import { Box } from "@mui/material";
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
          <Box>
            {children}
          </Box>
          )}
        </div>

    )
}
export default Tabpanel;