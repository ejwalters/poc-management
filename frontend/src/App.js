// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Accounts from './components/Accounts';
import Questions from './components/Questions';
import POC from './components/POC';
import Admin from './components/Admin';
import styled from 'styled-components';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    color: ${props => props.theme.primaryColor};
    background-color: ${props => props.theme.appBackgroundColor}; // Use a theme color or set it to black as needed
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    height: 100%;
    width: 100vw; // Ensure the width covers the entire viewport
  }
`;

const MainContent = styled.div`
  margin-left: 240px; // Adjust this based on your Navbar's width
  width: calc(100% - 240px); // Adjust the width to take into account the navbar
  height: 100vh; // Full viewport height
  overflow-y: auto; // Add scrolling to the main content area if needed
`;

const theme = {
  primaryColor: '#3A374E',
  secondaryColor: '#AF64FA',
  appBackgroundColor: '#E4E3F9'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pocs" element={<POC />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/admin" element={<Admin />} />

            <Route path="/login" element={<Login />} />
          </Routes>
        </MainContent>
      </Router>
    </ThemeProvider >
  );
}

export default App;

