import { ThemeOptions, createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import "@fontsource/roboto";

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
        fontFamily: "Roboto",
    },
});
