// import { AppBar } from "@mui/material";
import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';


export const Layout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      alignContent="center"
      p='50px'
    >
      <AppBar />
      <Outlet />
    </Box>
  );
};
