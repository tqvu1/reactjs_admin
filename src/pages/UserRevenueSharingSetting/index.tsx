import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { TabsWrapper } from 'src/components/Common';
import UserRevenueSharingSettingContainer from 'src/containers/UserRevenueSharingSetting';
import { fetchResources } from 'src/useCase/userRevenueSharingSetting';
import appActions from 'src/stores/ui/app';

const UserRevenueSharingSetting: React.FC = () => {
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
      <UserRevenueSharingSettingContainer />
    </TabsWrapper>
  );
};

export default UserRevenueSharingSetting;
