import React from 'react';
import { Box, Typography, Divider, List, ListItem, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/system';

// 스타일링을 위한 커스텀 컴포넌트
const SectionTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.2rem',
  margin: '20px 0 10px 0',
});

const SubsectionTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1rem',
  margin: '10px 0',
});

const StyledList = styled(List)({
  paddingLeft: '20px',
});

const StyledListItem = styled(ListItem)({
  paddingLeft: '20px',
  display: 'flex',
  alignItems: 'center',
});

const Paragraph = styled(Typography)({
  marginBottom: '10px',
});

function BF_RMD_GM_09_Content() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Box>{/* 위수탁생산 및 서비스관리 규정*/}
          <Typography>문서번호: BF-RMD-GM-09</Typography>
          
        </Box>
        <Box>
          <Typography>개정번호: 00</Typography>
          <Typography>제·개정일: 2024.07.01</Typography>
        </Box>
      </Box>
      <Typography variant="subtitle1" gutterBottom>
        제(개정) 이력
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>제·개정번호</TableCell>
              <TableCell>제·개정일자</TableCell>
              <TableCell>제·개정내용</TableCell>
              <TableCell>작성자</TableCell>
              <TableCell>비고</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>0</TableCell>
              <TableCell>2024.07.01</TableCell>
              <TableCell>신규 제정</TableCell>
              <TableCell>신동선</TableCell>
              <TableCell></TableCell>
            </TableRow>
            {/* Add more rows as needed */}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '20px' }}>
        문서 승인
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '25%' }}>구분</TableCell>
              <TableCell sx={{ width: '25%' }}>작성</TableCell>
              <TableCell sx={{ width: '25%' }}>검토</TableCell>
              <TableCell sx={{ width: '25%' }}>승인</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>서명</TableCell>
              <TableCell>신동선</TableCell>
              <TableCell>문창배</TableCell>
              <TableCell>이정훈</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>날짜</TableCell>
              <TableCell>2024.07.01</TableCell>
              <TableCell>2024.07.01</TableCell>
              <TableCell>2024.07.01</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <SectionTitle sx={{ marginTop: '100px' }}>1. 목적</SectionTitle>
      <Paragraph>
        본 규정은 (주)바이오에프디엔씨(이하 "당사"라 함)에서 위·수탁생산 및 서비스를 이용하는데 있어서 책임과 권한을 명확하게 하는 문서화된 절차를 수립, 유지하여 품질 향상을 목적으로 한다.
      </Paragraph>

      <Divider sx={{ marginY: '50px' }} />

      <SectionTitle>2. 적용범위</SectionTitle>
      <Paragraph>
        본 규정은 당사의 화장품 원료 위·수탁 생산 및 시험, 서비스에 대한 방법, 절차 등의 제반 사항에 대하여 적용한다.
      </Paragraph>

      <Divider sx={{ marginY: '50px' }} />

      <SectionTitle>3. 책임과 권한</SectionTitle>
      <SubsectionTitle>3.1 품질보증책임자</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.1.1 위·수탁 생산 및 서비스 관리에 대한 최종 승인</StyledListItem>
        <StyledListItem>3.1.2 위·수탁 생산 및 서비스 계약 검토 및 승인</StyledListItem>
        <StyledListItem>3.1.3 수탁자의 품질보증 능력 평가</StyledListItem>
        <StyledListItem>3.1.4 위·수탁 제품에 대한 시험, 판정 및 결과 통보</StyledListItem>
        <StyledListItem>3.1.5 부적합품 처리에 대한 최종 결정</StyledListItem>
      </StyledList>

      <SubsectionTitle>3.2 제조생산책임자</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.2.1 위·수탁 생산 관리 총괄</StyledListItem>
        <StyledListItem>3.2.2 수탁자의 생산 능력 평가</StyledListItem>
        <StyledListItem>3.2.3 위·수탁 제조 또는 생산에 필요한 원료, 반제품, 자재 등의 공급 관리</StyledListItem>
      </StyledList>

      <SubsectionTitle>3.3 업무담당자</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.3.1 위·수탁 계약 관련 실무 처리</StyledListItem>
        <StyledListItem>3.3.2 위·수탁 생산 및 서비스 관련 기록 관리</StyledListItem>
      </StyledList>
      <Divider sx={{ marginY: '50px' }} />

      <SectionTitle>4. 위·수탁 생산 및 서비스 계약서</SectionTitle>
      <StyledList>
        <StyledListItem>4.1 위탁자와 수탁자는 상호 의무사항을 서면 계약서로 작성하고 이를 준수한다.</StyledListItem>
        <StyledListItem>4.2 계약서는 2부를 작성하여 각각 대표자의 서명 후 1부씩 보관한다.</StyledListItem>
        <StyledListItem>4.3 계약서 내용 중 수정, 변경, 추가 또는 폐지 사항이 발생 시 상호 협의하여 재계약한다.</StyledListItem>
        <StyledListItem>4.4 계약서에는 다음 사항을 포함한다:</StyledListItem>
        <StyledList sx={{ paddingLeft: '40px' }}>
          <StyledListItem>4.4.1 계약 조건과 협정 준수에 대한 사항</StyledListItem>
          <StyledListItem>4.4.2 검사와 감사에 대한 사항</StyledListItem>
          <StyledListItem>4.4.3 부적합품 처리에 대한 사항</StyledListItem>
          <StyledListItem>4.4.4 납품, 납품기간 준수 및 불이행에 대한 사항</StyledListItem>
          <StyledListItem>4.4.5 제품 단가에 대한 사항</StyledListItem>
          <StyledListItem>4.4.6 대금 지급 및 지급 불이행에 대한 사항</StyledListItem>
          <StyledListItem>4.4.7 원료, 반제품, 자재의 공급에 대한 사항</StyledListItem>
          <StyledListItem>4.4.8 작업지시에 대한 사항</StyledListItem>
          <StyledListItem>4.4.9 계약기간에 대한 사항</StyledListItem>
          <StyledListItem>4.4.10 하자보수에 대한 사항</StyledListItem>
          <StyledListItem>4.4.11 분쟁 해결에 대한 사항</StyledListItem>
          <StyledListItem>4.4.12 비밀유지에 대한 사항</StyledListItem>
          <StyledListItem>4.4.13 하도급에 대한 사항</StyledListItem>
          <StyledListItem>4.4.14 손해배상 및 페널티에 대한 사항</StyledListItem>
        </StyledList>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />

      <SectionTitle>5. 위탁 생산관리</SectionTitle>
      <StyledList>
        <StyledListItem>5.1 제조 또는 충진 포장 외주 시, 생산관리담당자는 원료 또는 반제품을 청정하게 밀폐된 운송차를 통해 수탁업체에 공급한다.</StyledListItem>
        <StyledListItem>5.2 수탁업체가 제조한 반제품 또는 제품의 운송도 청정하게 밀폐된 운송차를 통해 관리한다.</StyledListItem>
        <StyledListItem>5.3 품질보증책임자는 수탁업체로부터 제조 기록을 입수받아 기록의 정확성 및 현품과 비교 검사하여 제조기록을 평가한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />

      <SectionTitle>6. 위수탁 시험관리</SectionTitle>
      <SubsectionTitle>6.1 시험 검체 전달 및 시험 의뢰</SubsectionTitle>
      <StyledList>
        <StyledListItem>6.1.1 위탁 시험 의뢰서를 작성하여 품질보증책임자의 승인 후 시험기관에 의뢰한다.</StyledListItem>
        <StyledListItem>6.1.2 수탁 시험기관에 위탁 시험 의뢰서 및 시험 검체를 송부한다.</StyledListItem>
      </StyledList>
      <SubsectionTitle>6.2 시험 검체 표기사항</SubsectionTitle>
      <Paragraph>검체명, 검체량, 제조번호 및 제조일자</Paragraph>
      <SubsectionTitle>6.3 시험 결과 접수 및 판정</SubsectionTitle>
      <Paragraph>
        품질보증책임자는 시험기관으로부터 시험성적서를 접수하고 당사 기준 또는 관련법규에 의거하여 최종판정한다. 부적합 시 관련부서에 통보하여 재처리 및 재시험의뢰 등을 실시한다.
      </Paragraph>
      <Divider sx={{ marginY: '50px' }} />

      <SectionTitle>7. 위수탁 서비스 (방충방서) 관리</SectionTitle>
      <StyledList>
        <StyledListItem>7.1 방충방서 계약서에 따라 매월 1회 외주업체의 점검 결과를 보고받는다.</StyledListItem>
        <StyledListItem>7.2 위생관리 책임자는 방충방서보고서를 검토하고 보관한다.</StyledListItem>
        <StyledListItem>7.3 이상 결과 확인 시 적합한 조치를 수탁자에게 요구한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />

      <SectionTitle>8. 위수탁 부적합품의 처리 및 폐기</SectionTitle>
      <StyledList>
        <StyledListItem>8.1 수탁업체는 부적합품 발생 시 "부적합 보고서"를 작성하여 당사 품질보증부서에 통보한다.</StyledListItem>
        <StyledListItem>8.2 품질보증책임자는 부적합 보고서를 검토하고 "부적합품 관리 규정"에 따라 처리를 결정한다.</StyledListItem>
        <StyledListItem>8.3 부적합품 폐기 시 수탁자는 폐기절차에 따라 전량 폐기하고, 폐기 관련자료를 당사에 보고한다.</StyledListItem>
        <StyledListItem>8.4 폐기 비용 분담은 당사와 수탁업체 간 상호 협의하여 처리한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />

      <SectionTitle>9. 기록 관리</SectionTitle>
      <Paragraph>
        위·수탁생산 및 서비스 관련 모든 기록은 4년간 보관하여 관리한다.
      </Paragraph>
    </Box>
  );
}

export default BF_RMD_GM_09_Content;