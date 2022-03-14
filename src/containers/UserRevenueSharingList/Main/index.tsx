import React from 'react';
import styled from 'styled-components';

import Search from './Search';
import Table from './Table';
import { RevenueSharing } from 'src/stores/domain/user/userRevenueSharing/list';

type MainProps = {
  loading: boolean;
  entities: RevenueSharing[];
};

const Main: React.FC<MainProps> = (props) => {
  return (
    <React.Fragment>
      <Search />
      <MarginBottom />
      <Table {...props} />
    </React.Fragment>
  );
};

const MarginBottom = styled.div`
  margin-bottom: 24px;
`;

export default Main;
