import React from 'react';
import { Tabs } from 'antd';

import { UserCreatorEntity } from 'src/stores/domain/user/userCreator/detail';
import UserDetail from './UserDetail';
import { t } from 'src/libs/I18nService';

const { TabPane } = Tabs;

type Props = {
  loading: boolean;
  userCreatorEntity: UserCreatorEntity | null;
};

const Main: React.FC<Props> = (props) => {
  return (
    <Tabs>
      <TabPane key="detail" tab={t('label.detail')}>
        <UserDetail {...props} />
      </TabPane>
    </Tabs>
  );
};

export default Main;
