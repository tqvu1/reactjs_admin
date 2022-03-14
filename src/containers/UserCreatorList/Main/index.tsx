import React from 'react';
import styled from 'styled-components';

import Search from './Search';
import Table from './Table';
import { UserCreator } from 'src/stores/domain/user/userCreator/list';

type MainProps = {
  loading: boolean;
  entities: UserCreator[];
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
