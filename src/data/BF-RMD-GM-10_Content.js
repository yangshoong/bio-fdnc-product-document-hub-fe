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

function BF_RMD_GM_10_Content() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Box>{/* 폐기물 처리 및 관리 규정*/}
          <Typography>문서번호: BF-RMD-GM-10</Typography>
          
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
        본 규정은 (주)바이오에프디엔씨(이하 "당사"라 한다) 내에서 발생한 폐기물에 대하여 적절하게 처리하여 당사 제품, 반제품 또는 실험실에 미치는 영향을 최소화한다. 
      </Paragraph>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>2. 적용범위</SectionTitle>
      <Paragraph>
        본 규정은 당사 화장품 원료 제조소 내에서 규정된 요구사항에 적합하지 않은 부적합품, 회수 또는 반품된 제품 중 폐기하기로 결정된 제품 그리고 당사 제조공정 및 실험실, 시설 등으로 발생된 폐기물에 적용한다.  
      </Paragraph>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>3. 책임과 권한</SectionTitle>
      <SubsectionTitle>3.1 대표이사</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.1.1 폐기물 처리 및 관리 규정의 최종 승인</StyledListItem>
      </StyledList>

      <SubsectionTitle>3.2 품질보증책임자</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.2.1 폐기품 처리 등에 대한 시험 및 적부판정에 대한 책임과 권한을 갖는다.</StyledListItem>
        <StyledListItem>3.2.2 관련부서와 협의하여 폐기품 처리방안을 강구한다.</StyledListItem>
        <StyledListItem>3.2.3 폐기품이 결정된 처리 방안에 따라 처리되었는지를 확인한다.</StyledListItem>
        <StyledListItem>3.2.4 폐기품 처리 등의 시정 및 예방조치를 주관한다.</StyledListItem>
      </StyledList>

      <SubsectionTitle>3.3 제조생산책임자</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.3.1 폐기처리 등에 대한 처리업무를 주관한다.</StyledListItem>
        <StyledListItem>3.3.2 폐기처리 등에 대하여 결정된 처리 방안에 따라 처리한다.</StyledListItem>
      </StyledList>

      <SubsectionTitle>3.4 업무담당자</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.4.1 폐기처리 등에 대한 시정 및 예방 조치를 취하고 그 결과를 기록 관리한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>4. 폐기물 관리</SectionTitle>
      <StyledList>
        <StyledListItem>4.1 부적합 제품, 반제품, 원료 및 자재의 조사는 승인된 자가 수행한다.</StyledListItem>
        <StyledListItem>4.2 품질에 문제가 있거나 회수, 반품된 제품의 폐기 또는 재작업 여부는 품질보증책임자에 의해 승인한다.</StyledListItem>
        <StyledListItem>4.3 다음 각 호에 해당될 경우에 폐기할 수 있다.</StyledListItem>
        <StyledList sx={{ paddingLeft: '40px' }}>
          <StyledListItem>4.3.1 변질, 변패 또는 병원미생물에 오염된 경우</StyledListItem>
          <StyledListItem>4.3.2 사용기한이 경과된 제품의 경우 (관리품 제외)</StyledListItem>
        </StyledList>
        <StyledListItem>4.4 폐기물은 다음과 같이 관리하고, 신속하게 폐기한다.</StyledListItem>
        <StyledList sx={{ paddingLeft: '40px' }}>
          <StyledListItem>4.4.1 폐기물 흐름은 생산과 실험실 작업에 영향을 미치지 않도록 관리한다.</StyledListItem>
          <StyledListItem>4.4.2 폐기물이 당사 원료 및 제품 품질에 영향을 미치지 않도록 적절하게 수거, 운송, 보관 및 신속하게 처분한다.</StyledListItem>
          <StyledListItem>4.4.3 폐기물의 용기는 적절한 경우 내용물 및 기타 정보로 적절히 식별한다.</StyledListItem>
          <StyledListItem>4.4.4 폐기물의 처분은 적절한 관리 수준에 의한 합법적인 방법으로 수행한다.</StyledListItem>
        </StyledList>
        <StyledListItem>4.5 제품 품질 및 안전에 미치는 영향에 따라 폐기물 유형을 분류한 목록을 첨부와 같이 작성하고, 유해 폐기물은 제품에 영향을 미치지 않도록 특별히 보관, 이송 및 처리한다.</StyledListItem>
      </StyledList>
      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>5. 폐기물 처리 방법</SectionTitle>
      <StyledList>
        <StyledListItem>5.1 제조 공정 및 기타 공정 발생 폐기물은 지정된 폐기물 보관 장소에 보관한다.</StyledListItem>
        <StyledListItem>5.2 반제품 및 제품을 오염시키지 않도록 폐기물을 폐기물 보관 용기에 모아 폐기물 보관 장소에 이동한다.</StyledListItem>
        <StyledListItem>5.3 폐기물관리 담당자는 폐기물을 폐기물 전문처리 회사에 위탁하여 처리한다.</StyledListItem>
        <StyledListItem>5.4 폐기물 처리 위탁업체는 위탁하고자 하는 폐기물 처리에 관련된 허가를 소유하고 있는 회사로서 당사와 계약을 체결한다.</StyledListItem>
        <StyledListItem>5.5 당사 제조 공정 및 품질관리 실험실 등에서 배출되는 폐기물을 옥외 "폐기물 보관 구역"에 보관 후 산업 폐기물 처리업체로 허가를 득하고 당사 협력업체로 선정된 업체에 위탁처리한다.</StyledListItem>
        <StyledListItem>5.6 위탁처리 결과를 "폐기물 완료 보고서"에 기록하고, 지정 폐기물 처리 내역을 "폐기물 관리법"에 따라 해당 관청에 보고한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>6. 기록 및 문서 관리</SectionTitle>
      <StyledList>
        <StyledListItem>6.1 본 규정에 의하여 작성된 기록은 4년간 보관한다.</StyledListItem>
        <StyledListItem>6.2 기타 사항은 "기록관리 규정"에 따른다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>7. 첨부</SectionTitle>
      <SubsectionTitle>7.1 폐기물 유형별 목록</SubsectionTitle>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>구분</TableCell>
              <TableCell>주된 폐기물</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell rowSpan={7}>일반 폐기물</TableCell>
              <TableCell>종이류: 포장재, 골판지, 폐지 등</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>플라스틱류: 제품용기, PP밴드, 일반 플라스틱 등</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>금속류: 알루미늄 캔, 철 캔, 원료드럼 등</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>유리류: 일반 유리병, 제품병 등</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>목재류: 폐목재, 나무 팔레트 등</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>실험 소모품: 일회용 장갑, 마스크, 종이타올 등</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>기타: 음식물 쓰레기, 일반 쓰레기 등</TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={6}>지정 폐기물</TableCell>
              <TableCell>폐유: 폐윤활유, 폐유기용제 등</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>폐산 및 폐알칼리: 실험실에서 발생한 산성 또는 알칼리성 폐액</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>폐실험약품: 유효기간 경과 또는 사용 불가능한 실험실 약품</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>폐 미생물배지: 실험 후 발생한 미생물 배양 배지</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>실험 소모품: 피펫 팁, 실험용 튜브, 주사기 등</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>폐제품류: 폐 반제품, 폐제품</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <SubsectionTitle sx={{ marginTop: '20px' }}>7.2 폐기물 완료 보고서</SubsectionTitle>

    </Box>
  );
}

export default BF_RMD_GM_10_Content;

