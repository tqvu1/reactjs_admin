import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';

import { APP_HEADER_HEIGHT } from 'src/constants/app';
import { RootState } from 'src/stores';

const ContentWrapper: React.FC = ({ children }) => {
  const appLoading = useSelector((state: RootState) => state.ui.app.loading);

  return (
    <Wrapper>
      {appLoading ? (
        <SpinWrapper>
          <Spin spinning={true} size="default" />
        </SpinWrapper>
      ) : (
        <React.Fragment>{children}</React.Fragment>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: ${`calc(100vh - ${APP_HEADER_HEIGHT}px)`};
  width: 100%;
  padding: 0 24px 24px;
`;

const SpinWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ContentWrapper;
