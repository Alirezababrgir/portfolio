import { cloneElement } from "react";
import { AppBar, Toolbar, Button, useScrollTrigger } from "@mui/material";

const Appbar = () => {
  function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Button variant="contained" color="warning">کلیک کن</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Appbar;