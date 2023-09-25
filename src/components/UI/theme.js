import { createTheme } from "@mui/material";
const Theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main:  '#7986cb',
      },
      direction: 'rtl',
      typography:'Vazir,Roboto',
    },
    typography:{
      fontSize:"2rem",
      button:{
        fontSize:"1rem"
      },
    }
  });
  export default Theme;