// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { createTheme } from '@mui/material/styles';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import DescriptionIcon from '@mui/icons-material/Description';
// import LayersIcon from '@mui/icons-material/Layers';
// import { AppProvider } from '@toolpad/core/AppProvider';
// import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';

// const NAVIGATION = [
//   {
//     kind: 'header',
//     title: 'Main items',
//   },
//   {
//     segment: 'dashboard',
//     title: 'Dashboard',
//     icon: <DashboardIcon />,
//   },
//   {
//     kind: 'divider',
//   },
//   {
//     kind: 'header',
//     title: 'Analytics',
//   },
//   {
//     segment: 'reports',
//     title: 'Reports',
//     icon: <BarChartIcon />,
//   },
// ];

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

// function DemoPageContent({ pathname }) {
//   return (
//     <Box
//       sx={{
//         py: 4,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'center',
//       }}
//     >
//       <Typography>Dashboard content for {pathname}</Typography>
//     </Box>
//   );
// }

// DemoPageContent.propTypes = {
//   pathname: PropTypes.string.isRequired,
// };

// function DashboardLayoutBasic(props) {
//   const { window } = props;

//   const router = useDemoRouter('/dashboard');

//   // Remove this const when copying and pasting into your project.
//   const demoWindow = window !== undefined ? window() : undefined;

//   return (
//     // Remove this provider when copying and pasting into your project.
//     <DemoProvider window={demoWindow}>
//       {/* preview-start */}
//       <AppProvider
//         navigation={NAVIGATION}
//         branding={{
//           logo: <img src="/logo.png" alt="logo ไง" />,
//           title: 'P-Dictor',
//           homeUrl: '/toolpad/core/introduction',
//         }}
//         router={router}
//         theme={demoTheme}
//         window={demoWindow}
//       >
//         <DashboardLayout>
//           <DemoPageContent pathname={router.pathname} />
//         </DashboardLayout>
//       </AppProvider>
//       {/* preview-end */}
//     </DemoProvider>
//   );
// }

// DashboardLayoutBasic.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * Remove this when copying and pasting into your project.
//    */
//   window: PropTypes.func,
// };

import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Drawer,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";

import { useThemeMode } from "../context/contextTheme";
import { NavLink,Link } from "react-router-dom";

const drawerWidth = 200;

function Header({ children }) {
  const [open, setOpen] = useState(false);
  //const [bgColor, setbgColor] = useState(false);
  const { darkMode, toggleTheme } = useThemeMode(); //เรียกใช้ theme ที่สร้างไว้

  const handleOpenDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="Navbar">
      {/* header */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton onClick={handleOpenDrawer}>
            <MenuIcon />
          </IconButton>
          <Avatar src="./logo.png"></Avatar>
          <Typography
            sx={{ mx: 1, textDecoration: "none" ,color: 'inherit',fontWeight:"bold"}}
            component={NavLink}
            to="/"
          >
            The Soothsayer
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Button>
            <Typography variant="h7" sx={{ mx: 1 }}>
              About us
            </Typography>
          </Button>
          <IconButton onClick={toggleTheme}>
            {darkMode ? <BedtimeIcon /> : <WbSunnyIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* sidebar */}
      <Drawer
        open={open}
        variant="persistent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0, //อย่าให้ Drawer ย่อขนาดลงอัตโนมัติ แม้ขนาดหน้าจอเปลี่ยน
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          {/* ส่วนที่ 1 */}
          <ListItemButton
            component={NavLink}
            to="/dashboard"
            // style={({ isActive }) => ({
            //   backgroundColor: isActive ? "#e3f2fd" : "none",
            // })}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          {/* ส่วนที่ 2 */}
          <ListItemButton component={NavLink} to="/product">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Solutions" />
          </ListItemButton>

          {/* ส่วนที่ 3 */}
          <ListItemButton component={NavLink} to="/product">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          transition: "margin-right 0.3s",
          mt: 1,
          mr: 5,
          ml: open ? `${220}px` : 4,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </div>
  );
}
export default Header;
