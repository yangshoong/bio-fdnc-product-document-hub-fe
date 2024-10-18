// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import useAuthStore from './store/authStore';
import SignupPage from './pages/SignupPage';
import RMDStandardPage from './pages/RMDStandardPage';
import Header from './components/Header';
import theme from './theme';
import AmorepacificAudit from './pages/AmorepacificAudit';
import RecordPage from './pages/RecordPage';
import RecordDetailPage from './pages/RecordDetailPage';
import UserManagementPage from './pages/UserManagementPage';

function AdminRoute({ children }) {
  const user = useAuthStore((state) => state.user);

  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
}

function App() {
  const user = useAuthStore(state => state.user);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        {user && <Navbar />}
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" replace /> : <LoginPage />} />
          <Route path="/signup" element={user ? <Navigate to="/" replace /> : <SignupPage />} />
          <Route path="/" element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          } />
          
          <Route path="/standard/rmd-standard" element={
            <PrivateRoute>
              <RMDStandardPage />
            </PrivateRoute>
          } />
          <Route path="/audit/amorepacific" element={
            <PrivateRoute>
              <AmorepacificAudit />
            </PrivateRoute>
          } />
          <Route path="/records" element={
            <PrivateRoute>
              <RecordPage />
            </PrivateRoute>
          } />
          <Route path="/records/:id" element={
            <PrivateRoute>
              <RecordDetailPage />
            </PrivateRoute>
          } />
          <Route path="/user-management" element={
            <AdminRoute>
              <UserManagementPage />
            </AdminRoute>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
