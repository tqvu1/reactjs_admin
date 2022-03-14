import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/stores';

import Main from './Main';

const UserRevenueSharingSetting: React.FC = () => {
  const props = useSelector(
    (state: RootState) => state.domain.user.userRevenueSharing.setting,
  );

  return <Main {...props} />;
};

export default UserRevenueSharingSetting;
