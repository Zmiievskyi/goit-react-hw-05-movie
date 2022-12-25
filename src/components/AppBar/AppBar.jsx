import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
// import { HeaderStyled, NavStyled, NavLinkStyled } from './HeaderStyled';

const AppBar = () => {
  return (
    <Box
      as="header"
      width="100%"
      border="1px solid black"
      p="15px"
    >
      <Box as="nav" display="flex" justifyContent="space-around">
        <NavLink to="/">Home</NavLink>
        <NavLink to='movies'>Movies</NavLink>
      </Box>
    </Box>
    
  );
};
export default AppBar;