// frontend/src/components/Navbar.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItemText, Divider, IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

const NavBarDrawer = styled(Drawer)({
    width: 240,
    '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
        color: '#FFF',
        backgroundColor: '#3A374E',
    }
});

const MenuButton = styled(IconButton)({
    color: '#FFF',
    margin: '10px'
});

const NavBarList = styled(List)({
    width: '100%',
});

const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
    border-radius: 10px;
    margin: 5px;
    padding: 10px 20px;
    margin-bottom: 50px;

    &.active {
        background-color: ${({ theme }) => theme.secondaryColor};
        color: white;
    }
`;

const NavBarIcon = styled.div`
    margin-right: 20px; // Space between icon and text
`;

const StyledMenuIcon = styled(MenuIcon)`
    color: white !important;  // Only use !important as a last resort
`;

const NavBar = () => {
    return (
        <NavBarDrawer variant="permanent">
            <MenuButton>
                <StyledMenuIcon />
            </MenuButton>
            <Divider />
            <NavBarList>
                <StyledNavLink to="/" exact><DashboardIcon /> Dashboard</StyledNavLink>
                <StyledNavLink to="/pocs"><DashboardIcon /> POCs</StyledNavLink> {/* Ensure correct icon */}
                <StyledNavLink to="/accounts"><AccountBoxIcon /> Accounts</StyledNavLink>
                <StyledNavLink to="/questions"><QuestionAnswerIcon /> Questions</StyledNavLink>
                <StyledNavLink to="/admin"><AdminPanelSettingsIcon /> Admin</StyledNavLink>
                <StyledNavLink to="/logout"><LogoutIcon style={{ color: '#FF3B6A' }} /> Logout</StyledNavLink>
            </NavBarList>
        </NavBarDrawer>
    );
};

export default NavBar;