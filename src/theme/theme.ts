import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } },
  components: {
    MuiTextField: {
      defaultProps: { size: "small" },
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": { fontSize: "14px", minHeight: "36px" },
          "& .MuiInputLabel-root": { fontSize: "13px" },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: { "& .MuiInputBase-root": { minHeight: "36px" } },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: { minWidth: "auto", padding: "8px 12px", fontSize: "0.75rem" },
      },
    },
  },
});

export default theme;
