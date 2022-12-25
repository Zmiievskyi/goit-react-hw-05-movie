import { lazy, Suspense } from 'react';
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
      p="50px"
    >
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
