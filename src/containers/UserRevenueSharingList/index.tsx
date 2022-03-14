import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/stores';

import Main from './Main';

const UserRevenueSharingListContainer: React.FC = () => {
  const userProps = useSelector(
    (state: RootState) => state.domain.user.userRevenueSharing.list,
  );

  return <Main {...userProps} />;
};

export default UserRevenueSharingListContainer;
