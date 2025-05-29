// import { ThemeProvider ,createTheme } from "@mui/material"
// import { createContext } from "react"
// import { useContext } from "react"; 

// const contextTheme = createTheme({
//     palette: {
       
//     },
//     components: {
//         MuiAppBar: {
//             styleOverrides: {
//                 root: {
//                     backgroundColor: 'white'
//                 }
//             }
//         }
//     },
// });

// const demoTheme = createTheme({
//   cssVariables: {
//     colorSchemeSelector: 'data-toolpad-color-scheme',
//   },
//   colorSchemes: { light: true, dark: true },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// contextTheme.js
import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme ,responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// สร้างtheme 
const ThemeContext = createContext({
  darkMode: false, 
  toggleTheme: () => {},
});

// สร้าง object เพื่อเข้าถึงcomponents ลูกหลาน
export const useThemeMode = () => useContext(ThemeContext);


export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const theme = useMemo(() => {
  let baseTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      ...(darkMode
        ? {
            background: { default: "#021526", paper: "#021526" },
          }
        : {
            background: { default: "#ffffff", paper: "#ffffff" },
          }),
    },
    typography: {
      h6: {
        fontSize: "1rem",
        "@media (min-width:600px)": {
          fontSize: "1.25rem",
        },
        "@media (min-width:900px)": {
          fontSize: "1.5rem",
        },
      },
      body1: {
        fontSize: "0.9rem",
        "@media (min-width:600px)": {
          fontSize: "1rem",
        },
        "@media (min-width:900px)": {
          fontSize: "1.2rem",
        },
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? "#021526" : "#ffffff",
            boxShadow: "none",
          },
        },
        defaultProps: {
          color: "transparent",
          elevation: 0,
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: darkMode ? "#021526" : "#ffffff",
          },
        },
        defaultProps: {
          color: "transparent",
          elevation: 0,
        },
      },
       MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none", // ปิด uppercase
            // กำหนดสีปุ่มเริ่มต้น (ถ้าต้องการ)
            color: "inherit",
            backgroundColor: "transparent",
            boxShadow: "none"
          },
        },
        defaultProps: {
          // กำหนดค่าพื้นฐาน เช่น color หรือ variant
          color: "inherit",
          variant: "text",
          //disableElevation: true, // ปิดเงา
        },
      },
    },
  });

  // ✅ ใส่ responsiveFontSizes ตรงนี้!
  return responsiveFontSizes(baseTheme);
}, [darkMode]);



  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

