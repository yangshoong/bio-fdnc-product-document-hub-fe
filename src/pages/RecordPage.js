// src/pages/RecordPage.js

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
  Chip,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  ListItemText,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RecordPage() {
  const [records, setRecords] = useState([]);
  const [filters, setFilters] = useState({
    regulation: '',
    tags: [],
    search: '',
  });
  const [regulations, setRegulations] = useState([
    '규정1',
    '규정2',
    '규정3',
  ]);
  const [availableTags, setAvailableTags] = useState([
    '일간',
    '주간',
    '월간',
    '비정기적',
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchRecords();
  }, [filters]);

  const fetchRecords = async () => {
    try {
      const response = await axios.get('/api/records', {
        params: filters,
      });
      setRecords(response.data);
    } catch (error) {
      console.error('레코드 조회 실패:', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRecordClick = (id) => {
    navigate(`/records/${id}`);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4">레코드 관리</Typography>

      {/* 필터 섹션 */}
      <Box sx={{ marginY: '20px' }}>
        <FormControl sx={{ minWidth: 120, marginRight: '20px' }}>
          <InputLabel>규정</InputLabel>
          <Select
            name="regulation"
            value={filters.regulation}
            onChange={handleFilterChange}
            label="규정"
          >
            <MenuItem value="">
              <em>전체</em>
            </MenuItem>
            {regulations.map((reg) => (
              <MenuItem key={reg} value={reg}>
                {reg}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200, marginRight: '20px' }}>
          <InputLabel>태그</InputLabel>
          <Select
            multiple
            name="tags"
            value={filters.tags}
            onChange={handleFilterChange}
            renderValue={(selected) => selected.join(', ')}
            label="태그"
          >
            {availableTags.map((tag) => (
              <MenuItem key={tag} value={tag}>
                <Checkbox checked={filters.tags.includes(tag)} />
                <ListItemText primary={tag} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          name="search"
          value={filters.search}
          onChange={handleFilterChange}
          label="검색"
          variant="outlined"
          sx={{ marginRight: '20px' }}
        />

        <Button variant="contained" onClick={fetchRecords}>
          검색
        </Button>
      </Box>

      {/* 레코드 리스트 */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {records.map((record) => (
          <Card
            key={record._id}
            sx={{ width: '200px', margin: '10px', cursor: 'pointer' }}
            onClick={() => handleRecordClick(record._id)}
          >
            <CardContent>
              <Typography variant="h6">{record.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {record.regulation}
              </Typography>
              <Box sx={{ marginTop: '10px' }}>
                {record.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" sx={{ marginRight: '5px' }} />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default RecordPage;
