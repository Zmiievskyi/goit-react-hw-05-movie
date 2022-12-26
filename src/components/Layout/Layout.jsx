import { Suspense } from 'react';
import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';
// import AppBar from 'components/AppBar/AppBar';
import ResponsiveAppBar from 'components/AppBar/AppBarMui';

const Layout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      alignContent="center"
    >
      <ResponsiveAppBar/>
      {/* <AppBar /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
export default Layout;