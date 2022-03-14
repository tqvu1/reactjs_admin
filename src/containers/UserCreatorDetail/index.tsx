import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/stores';

import Main from './Main';

const UserCreatorDetailContainer: React.FC = () => {
  const userProps = useSelector(
    (state: RootState) => state.domain.user.userCreator.detail,
  );

  return <Main {...userProps} />;
};

export default UserCreatorDetailContainer;
