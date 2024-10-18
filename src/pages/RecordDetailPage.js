// src/pages/RecordDetailPage.js

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Chip,
  Tabs,
  Tab,
} from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function RecordDetailPage() {
  const { id } = useParams();
  const [record, setRecord] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    fetchRecord();
  }, []);

  const fetchRecord = async () => {
    try {
      const response = await axios.get(`/api/records/${id}`);
      setRecord(response.data);
    } catch (error) {
      console.error('레코드 조회 실패:', error);
    }
  };

  const handleTabChange = (e, newValue) => {
    setTabIndex(newValue);
  };

  if (!record) return <div>로딩 중...</div>;

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4">{record.title}</Typography>
      <Typography variant="subtitle1">{record.regulation}</Typography>
      <Box sx={{ marginY: '10px' }}>
        {record.tags.map((tag) => (
          <Chip key={tag} label={tag} sx={{ marginRight: '5px' }} />
        ))}
      </Box>

      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="내용" />
        <Tab label="히스토리" />
        <Tab label="승인" />
      </Tabs>

      {tabIndex === 0 && (
        <Box sx={{ marginTop: '20px' }}>
          <Typography>{record.content}</Typography>
          {/* 편집 기능 추가 가능 */}
        </Box>
      )}

      {tabIndex === 1 && (
        <Box sx={{ marginTop: '20px' }}>
          {record.history.map((item, index) => (
            <Box key={index} sx={{ marginBottom: '10px' }}>
              <Typography variant="body2">
                수정일: {new Date(item.editedAt).toLocaleString()}
              </Typography>
              <Typography variant="body2">수정자: {item.editedBy.username}</Typography>
              <Typography>{item.content}</Typography>
            </Box>
          ))}
        </Box>
      )}

      {tabIndex === 2 && (
        <Box sx={{ marginTop: '20px' }}>
          {/* 승인 기능 구현 */}
          <Typography>승인 상태: {record.approvalStatus}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default RecordDetailPage;
