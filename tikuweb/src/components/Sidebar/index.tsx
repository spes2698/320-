import React, { useState } from 'react';
import { Layout, Menu, Typography, Avatar, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  BookOutlined,
  FileTextOutlined,
  SearchOutlined,
  FormOutlined,
  CalendarOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

const { Sider } = Layout;
const { Title } = Typography;

const LogoContainer = styled.div`
  height: 64px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Title)`
  color: white !important;
  margin: 0 !important;
  white-space: nowrap;
  overflow: hidden;
`;

const StyledSider = styled(Sider)`
  height: 100vh;
  position: fixed;
  left: 0;
  overflow: auto;

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }

  .ant-menu-item {
    margin: 8px 0;
  }
`;

const UserSection = styled.div`
  margin-top: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;

const UserName = styled.div`
  margin-left: 12px;
  color: white;
  font-weight: 500;
`;

const CollapseButton = styled(Button)`
  color: white;
  border: none;
  background: transparent;
  position: absolute;
  right: 16px;
  top: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  
  &:hover {
    color: #1890ff;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/">首页</Link>,
    },
    {
      key: '/practice',
      icon: <BookOutlined />,
      label: <Link to="/practice">刷题练习</Link>,
    },
    {
      key: '/wrong-notes',
      icon: <FileTextOutlined />,
      label: <Link to="/wrong-notes">错题笔记</Link>,
    },
    {
      key: '/search',
      icon: <SearchOutlined />,
      label: <Link to="/search">搜题</Link>,
    },
    {
      key: '/exam',
      icon: <FormOutlined />,
      label: <Link to="/exam">模拟考试</Link>,
    },
    {
      key: '/daily',
      icon: <CalendarOutlined />,
      label: <Link to="/daily">每日一练</Link>,
    },
    {
      key: '/profile',
      icon: <UserOutlined />,
      label: <Link to="/profile">个人中心</Link>,
    },
  ];

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <StyledSider 
      width={220} 
      collapsible 
      collapsed={collapsed}
      trigger={null} 
      theme="dark"
    >
      <LogoContainer>
        <Logo level={4}>{collapsed ? '题库' : '大厂题库'}</Logo>
        <CollapseButton 
          type="text" 
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} 
          onClick={toggleCollapsed}
        />
      </LogoContainer>
      
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[currentPath]}
        items={menuItems}
      />
      
      <UserSection>
        <UserInfo>
          <Avatar icon={<UserOutlined />} />
          {!collapsed && <UserName>游客用户</UserName>}
        </UserInfo>
        <Button type="primary" block>
          {collapsed ? '登录' : '登录 / 注册'}
        </Button>
      </UserSection>
    </StyledSider>
  );
};

export default Sidebar; 