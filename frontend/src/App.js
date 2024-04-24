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

import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.primaryColor};
    background-color: 'white'';
  }
`;

const theme = {
  primaryColor: '#3A374E',
  secondaryColor: '#AF64FA'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

