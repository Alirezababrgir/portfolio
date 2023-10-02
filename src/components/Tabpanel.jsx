import { Box, Typography } from "@mui/material";

const Tabpanel = ({ children, index, value, ...others }) => {
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