import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import notificationActions from 'src/stores/ui/notification';
import Notification from 'src/components/Notification';
import { RootState } from 'src/stores';

const ContainerComponent = () => {
  const dispatch = useDispatch();
  const handleOffNotification = useCallback(
    () => dispatch(notificationActions.offNotification()),
    [dispatch],
  );

  const notification = useSelector(
    (state: RootState) => state.ui.notification,
    (left, right) => _.isEqual(left, right),
  );

  const containerProps = {
    handleOffNotification,
    ...notification,
  };

  return <Notification {...containerProps} />;
};

export default ContainerComponent;
