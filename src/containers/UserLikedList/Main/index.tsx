import React from 'react';
import styled from 'styled-components';

import Search from './Search';
import UserLikedTable from './Table';
import { Like } from 'src/stores/domain/user/userLiked/list';

type MainProps = {
  loading: boolean;
  entities: Like[];
};

const Main: React.FC<MainProps> = (props) => {
  return (
    <React.Fragment>
      <Search />
      <MarginBottom />
      <UserLikedTable {...props} />
    </React.Fragment>
  );
};

const MarginBottom = styled.div`
  margin-bottom: 24px;
`;

export default Main;
