// frontend/src/components/Navbar.js

import React, { useState } from 'react';
import styled from 'styled-components';
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

const NavBarItem = styled.div`
    display: flex;
    align-items: center;
    list-style-type: none;
    color: ${({ isSelected, theme }) => isSelected ? 'white' : 'inherit'};
    background-color: ${({ isSelected, theme }) => isSelected ? theme.secondaryColor : 'transparent'};
    border-radius: 10px;
    margin: 5px;
    padding: 10px 20px;
    margin-bottom: 81px; // Consistent spacing between items
    cursor: pointer;
`;

const NavBarIcon = styled.div`
    color: 'inherit';
    margin-right: 20px; // Space between icon and text
`;

const StyledLogoutIcon = styled(LogoutIcon)`
  && {
    color: #FF3B6A; // Ensuring high specificity
  }
`;


const NavBar = () => {
    const [selectedItem, setSelectedItem] = useState('');

    const navItems = [
        { name: 'Dashboard', icon: <DashboardIcon /> },
        { name: 'POCs', icon: <DashboardIcon /> }, // Replace with the correct icon
        { name: 'Accounts', icon: <AccountBoxIcon /> },
        { name: 'Questions', icon: <QuestionAnswerIcon /> },
        { name: 'Admin', icon: <AdminPanelSettingsIcon /> },
        { name: 'Logout', icon: <StyledLogoutIcon />, specialColor: '#FF3B6A' }
    ];

    const handleItemClick = (name) => {
        setSelectedItem(name);
    };

    return (
        <NavBarDrawer variant="permanent">
            <MenuButton>
                <MenuIcon />
            </MenuButton>
            <Divider />
            <NavBarList>
                {navItems.map(item => (
                    <NavBarItem
                        key={item.name}
                        isSelected={selectedItem === item.name}
                        onClick={() => handleItemClick(item.name)}
                        style={{ color: item.specialColor }}
                    >
                        <NavBarIcon style={{ color: selectedItem === item.name && item.specialColor ? item.specialColor : '#FFF' }}>
                            {item.icon}
                        </NavBarIcon>
                        <ListItemText primary={item.name} />
                    </NavBarItem>
                ))}
            </NavBarList>
        </NavBarDrawer>
    );
};

export default NavBar;
