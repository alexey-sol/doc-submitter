import { ThemeOptions, createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import "@fontsource/roboto";
import "@fontsource/source-sans-pro";

export const appTheme: ThemeOptions = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF",
            dark: "#F1F3F4",
        },
        secondary: {
            main: "#1A73E8",
        },
        background: {
            default: "#FFFFFF",
            paper: "#FFFFFF",
        },
        info: {
            main: "#E3E7E9",
            dark: "#A2A9AB",
        },
        text: {
            primary: "#3C4043",
            secondary: "#202124",
            disabled: "#5F6368",
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        caption: {
            fontSize: "1.05rem",
        },
        fontFamily: "Roboto",
        fontWeightRegular: 500,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 920,
            lg: 1200,
            xl: 1536,
        },
    },
});
