import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Typography, Tabs, Spin, Space, Pagination, Tag, Rate } from 'antd';
import { ClockCircleOutlined, ReadOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchExams, setActiveCategory } from '../../store/examSlice';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const PageContainer = styled.div`
  padding: 24px;
  width: 100%;
`;

const StyledCard = styled(Card)`
  margin-bottom: 16px;
  border-radius: 8px;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ExamInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: #666;
  font-size: 14px;
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const TagContainer = styled.div`
  margin-top: 12px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const ExamPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filteredItems, activeCategory, status } = useAppSelector((state) => state.exam);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchExams());
    }
  }, [dispatch, status]);

  const handleCategoryChange = (category: string) => {
    dispatch(setActiveCategory(category));
    setCurrentPage(1);
  };

  const renderDifficultyTag = (difficulty: string) => {
    const colorMap: Record<string, string> = {
      easy: 'success',
      medium: 'warning',
      hard: 'error',
    };
    
    const textMap: Record<string, string> = {
      easy: '简单',
      medium: '中等',
      hard: '困难',
    };

    return <Tag color={colorMap[difficulty]}>{textMap[difficulty]}</Tag>;
  };

  // 分页处理
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  if (status === 'loading') {
    return (
      <PageContainer>
        <Title level={2}>模拟考试</Title>
        <LoadingContainer>
          <Spin size="large" tip="加载中..." />
        </LoadingContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Title level={2}>模拟考试</Title>
      <Text type="secondary" style={{ marginBottom: 24, display: 'block' }}>
        全真模拟大厂笔试环境，刷题提高通过率
      </Text>
      
      <Tabs activeKey={activeCategory} onChange={handleCategoryChange}>
        <TabPane tab="全部" key="all" />
        <TabPane tab="前端开发" key="frontend" />
        <TabPane tab="后端开发" key="backend" />
        <TabPane tab="算法" key="algorithm" />
      </Tabs>
      
      <Row gutter={[16, 16]}>
        {currentItems.map((exam) => (
          <Col xs={24} sm={24} md={12} lg={8} xl={8} key={exam.id}>
            <StyledCard
              hoverable
              title={exam.title}
              extra={<Tag color="blue">{exam.status === 'available' ? '可做' : '即将开放'}</Tag>}
            >
              <TagContainer>
                {renderDifficultyTag(exam.difficulty)}
              </TagContainer>

              <ExamInfo>
                <ClockCircleOutlined style={{ marginRight: 8 }} />
                <span>{exam.duration} 分钟</span>
                <ReadOutlined style={{ marginLeft: 16, marginRight: 8 }} />
                <span>{exam.questionCount} 题</span>
                <UserOutlined style={{ marginLeft: 16, marginRight: 8 }} />
                <span>{exam.participants} 人参与</span>
              </ExamInfo>

              <SpaceBetween>
                <div>
                  <Rate disabled defaultValue={exam.rating} style={{ fontSize: 14 }} />
                  <span style={{ marginLeft: 8 }}>{exam.rating}</span>
                </div>
                <a href={`/exam/${exam.id}`}>开始模拟</a>
              </SpaceBetween>
            </StyledCard>
          </Col>
        ))}
      </Row>
      
      {filteredItems.length > pageSize && (
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Pagination
            current={currentPage}
            onChange={setCurrentPage}
            total={filteredItems.length}
            pageSize={pageSize}
            showSizeChanger={false}
          />
        </div>
      )}
    </PageContainer>
  );
};

export default ExamPage; 