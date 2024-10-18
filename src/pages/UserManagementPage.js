// src/pages/UserManagementPage.js

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import axios from 'axios';

function UserManagementPage() {
  const [users, setUsers] = useState([]);
  const roles = ['general', 'admin'];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/users', {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
      // Add error handling, e.g., show an error message to the user
    } finally {
      setIsLoading(false);
    }
  };

  const handleRoleChange = async (userId, newRole) => {
    try {
      await axios.put(
        `/api/users/${userId}/role`,
        { role: newRole },
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        }
      );
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u._id === userId ? { ...u, role: newRole } : u))
      );
    } catch (error) {
      console.error('Failed to update user role:', error);
      // Add error handling, e.g., show an error message to the user
    }
  };

  return (
    <Box sx={{ padding: '20px', marginLeft: '100px' }}>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      {isLoading ? (
        <Typography>Loading users...</Typography>
      ) : (
        <Table sx={{ marginTop: '20px' }}>
          <TableHead>
            <TableRow>
              <TableCell>이름</TableCell>
              <TableCell>이메일</TableCell>
              <TableCell>권한</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <FormControl sx={{ minWidth: 120 }}>
                    <Select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    >
                      {roles.map((role) => (
                        <MenuItem key={role} value={role}>
                          {role === 'general' ? '일반' : '관리자'}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Box>
  );
}

export default UserManagementPage;
