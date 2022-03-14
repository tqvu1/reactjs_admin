import React from 'react';
import styled from 'styled-components';
import { Spin, Typography } from 'antd';
import { useSelector } from 'react-redux';

import { APP_HEADER_HEIGHT } from 'src/constants/app';
import { RootState } from 'src/stores';

const { Title } = Typography;

type Props = {
  title: string;
  extra?: React.ReactElement;
};

const ContentWrapper: React.FC<Props> = ({ title, children, extra }) => {
  const appLoading = useSelector((state: RootState) => state.ui.app.loading);

  return (
    <Wrapper>
      {appLoading ? (
        <SpinWrapper>
          <Spin spinning={true} size="default" />
        </SpinWrapper>
      ) : (
        <React.Fragment>
          <Title
            level={4}
            style={{
              marginBottom: 24,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {title}
            {extra}
          </Title>
          {children}
        </React.Fragment>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: ${`calc(100vh - ${APP_HEADER_HEIGHT}px)`};
  width: 100%;
  padding: 24px;

  .ant-radio-button-wrapper {
    margin-right: 8px;
  }
`;

const SpinWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ContentWrapper;
