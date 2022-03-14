import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Layout, Typography, Avatar } from 'antd';
import {
  HomeOutlined,
  TeamOutlined,
  TransactionOutlined,
  CommentOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

import { APP_HEADER_HEIGHT } from 'src/constants/app';
import { t } from 'src/libs/I18nService';
import logo from 'src/images/logo.png';
import useCollapseSider from 'src/utils/hooks/useCollapseSider';

const { Sider } = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;

type Props = {};

const AppSider: React.FC<Props> = () => {
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState<React.Key[]>([]);
  const [collapsed] = useCollapseSider();

  const getOpenKey = () => {
    const [, paths] = location.pathname.split('/');
    return paths || '';
  };

  const defaultOpenKeys = [getOpenKey(), ...(openKeys as string[])];

  return (
    <Sider width={250} collapsed={collapsed}>
      <StyleLogo collapsed={collapsed}>
        <Avatar src={logo} size="large" />
        {!collapsed && (
          <Title
            style={{ color: '#fff', marginLeft: 8, marginBottom: 0 }}
            level={4}
          >
            떴다마켓
          </Title>
        )}
      </StyleLogo>
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={[location.pathname]}
        openKeys={collapsed ? undefined : defaultOpenKeys}
        defaultOpenKeys={collapsed ? defaultOpenKeys : undefined}
        style={{
          // maxHeight: `calc(100vh - ${APP_HEADER_HEIGHT}px)`,
          borderRight: 0,
        }}
        onOpenChange={setOpenKeys}
      >
        <Menu.Item icon={<HomeOutlined />} key="/">
          <Link to="/">{t('title.home')}</Link>
        </Menu.Item>
        <SubMenu key="user" icon={<TeamOutlined />} title={t('title.user')}>
          <Menu.Item key="/user_creator/list">
            <Link to="/user_creator/list">{t('title.user_list')}</Link>
          </Menu.Item>
          <Menu.Item key="/user_liked/list">
            <Link to="/user_liked/list">{t('title.user_liked_list')}</Link>
          </Menu.Item>
          <Menu.Item key="/user_revenue_sharing/list">
            <Link to="/user_revenue_sharing/list">
              {t('title.user_revenue_sharing_list')}
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item icon={<CommentOutlined />} key="/comment/list">
          <Link to="/comment/list">{t('title.comment_management')}</Link>
        </Menu.Item>
        <SubMenu
          key="transaction"
          icon={<TransactionOutlined />}
          title={t('title.transaction')}
        >
          <Menu.Item key="/transaction/list">
            <Link to="/transaction/list">{t('title.transaction_list')}</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

const StyleLogo = styled.div<{ collapsed: boolean }>`
  height: ${APP_HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: ${({ collapsed }) => (collapsed ? 'center' : 'left')};
  padding-left: ${({ collapsed }) => (collapsed ? 'none' : '24px')};
`;

export default AppSider;
