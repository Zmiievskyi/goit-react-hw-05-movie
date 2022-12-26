import { red } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';
const { default: styled } = require('styled-components');

export const HeaderStyled = styled.header`
  height: 60px;
  width: 100%;
  background-color: blue;
`;

export const NavStyled = styled.nav`
  padding: 10px;
  width: 100%;
  text-align: justify;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 20px;
  
  border-radius: 5px;
  color: white;
  text-decoration: none;
  &.active {
    color: orange;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: pink;
    color: black;
  }
`;
