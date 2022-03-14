import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/stores';

import Main from './Main';

const UserLikedListContainer: React.FC = () => {
  const userLikedListProps = useSelector(
    (state: RootState) => state.domain.user.userLiked.list,
  );

  return <Main {...userLikedListProps} />;
};

export default UserLikedListContainer;
