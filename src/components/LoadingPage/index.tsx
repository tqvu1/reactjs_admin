import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const LoadingPage: React.FC = () => {
  return (
    <StyledWrapper>
      <Spin size="large" spinning={true} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  opacity: 1;
`;

export default LoadingPage;
