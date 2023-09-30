import { createTheme } from "@mui/material"; //theme generation
import { blue, red } from "@mui/material/colors";
const Theme = createTheme({
  palette: {
    mode: 'light',
    gray: {
      main: '#424242',
    },
    direction: 'rtl',
    typography: 'Vazir,Roboto',
  },
  typography: {
    fontSize: "2rem",
    button: {
      fontSize: "1rem"
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false, //disabled button animation
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            textTransform: 'none',
            border: `2px dashed ${blue[500]}`,
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: `4px dashed ${red[500]}`,
          },
        },
      ],
    },
  },
});
export default Theme;