import {
    createTheme,
    ThemeProvider,
    Theme,
    useTheme,
  } from "@mui/material/styles";
export const customTheme = (outerTheme: Theme) =>
  createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "white",
            "--TextField-brandBorderFocusedColor": "white",
            "--TextField-brandInputFocusedColor": "white",
            "& label.Mui-focused": {
              color: "white !important",
              borderColor: "white ",
            },
            "& label.Mui-focused:after": {
              color: "white !important",
              borderColor: "white ",
            },
            "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root": {
              color: "white",
              borderColor: "white ",
            },
            "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root:focused": {
              borderColor: "white !important",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "white",
          },
          root: {
            "&:after": {
              backgroundColor: "white",
              borderColor: "white",
            },
            
            "&.Mui-focused .MuiNotchedOutline-notchedOutline": {
              borderColor: "white",
            },
            "&.Mui-focused": {
              backgroundColor: "transparent",
            },
            "&.Mui-focused:after": {
              backgroundColor: "transparent",
              color: "white !important",
            },
            "&.Mui-focused:not(.Mui-error)": {
              backgroundColor: "transparent",
              color: "white !important",
            },
            "&:hover": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
                color: "white !important",
              },
              "& label.Mui-focused": {
                color: "white !important",
              },
              "& input": {
                color: "white !important",
              },
            },
          },
        },
      },
    },
  });