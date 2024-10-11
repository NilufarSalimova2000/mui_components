import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#618C78",
            50: "#F0F5F2",
            100: "#DEE8E3",
            200: "#C0D3CA",
            300: "#9FBCAE",
            400: "#7EA593",
            500: "#618C78",
            600: "#4D6F5F",
            700: "#3A5448",
            800: "#283931",
            900: "#131B17",
            950: "#0A0F0D"
        },
        secondary: {
            main: "#CB4A4A",
            50: "#F9EBEB",
            100: "#F5DBDB",
            200: "#EBB8B8",
            300: "#E09494",
            400: "#D56C6C",
            500: "#CB4A4A",
            600: "#AA3131",
            700: "#832626",
            800: "#571919",
            900: "#2C0D0D",
            950: "#140606"
        }
    },
    components:{
        MuiContainer:{
            styleOverrides:{
                root:{
                    maxWidth: 1280,
                }
            }
        }
    },
    typography: {
        fontFamily:["Ubuntu", "sans-serif"].join(","),
        h2: {
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "130%",
            color: "#1d1d1d",
        },
        body1: {
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "100%",
            color: "#1d1d1d"
        },
        h1: {
            fontWeight: 700,
            fontSize: "60px",
            lineHeight: "130%",
            // color: "#f9f9f9",
            width: "524px"
        }
    },
    breakpoints:{
        values:{
            xs: 0,
            sm: 300,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    }
})