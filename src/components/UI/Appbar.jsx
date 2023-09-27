import { cloneElement } from "react";
import { AppBar, Toolbar, Button, useScrollTrigger } from "@mui/material";
import styled from "@emotion/styled"; //customized tag style by style component


const Customebtn = styled(Button)`color:red;:hover {color: blue;}`; //customized button style by style component

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
            <Button variant="dashed" color="warning">defual btn</Button>
            <Customebtn variant="contained" color="warning">custom btn</Customebtn>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Appbar;