import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { TabsWrapper } from 'src/components/Common';
import UserCreatorDetailContainer from 'src/containers/UserCreatorDetail';
import { fetchResources } from 'src/useCase/userCreatorDetail';
import appActions from 'src/stores/ui/app';

const UserDetail: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id?: string }>();

  React.useEffect(() => {
    dispatch(appActions.updateLoading(true));
  }, []);

  React.useEffect(() => {
    dispatch(fetchResources(id!));
  }, []);

  return (
    <TabsWrapper>
      <UserCreatorDetailContainer />
    </TabsWrapper>
  );
};

export default UserDetail;
