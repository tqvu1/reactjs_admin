import React from 'react';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import DropdownList from './DropdownList';
import styled from 'styled-components';
import { APP_HEADER_HEIGHT } from 'src/constants/app';
import useCollapseSider from 'src/utils/hooks/useCollapseSider';
import SwitchLang from 'src/components/Layout/Header/SwitchLang';

const { Header } = Layout;

type Props = {};

const AppHeader: React.FC<Props> = () => {
  const [collapsed, toggle] = useCollapseSider();

  return (
    <Wrapper>
      <Header className="app-layout-header">
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            onClick: toggle,
            style: { fontSize: 20 },
          },
        )}
        <SwitchLang />
        <DropdownList />
      </Header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ant-layout-header {
    height: ${APP_HEADER_HEIGHT}px;
    background: #fff;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .drop-down {
    display: flex;
    align-items: center;
    cursor: pointer;
    .header_text {
      margin-left: 8px;
    }
  }
`;

export default AppHeader;
