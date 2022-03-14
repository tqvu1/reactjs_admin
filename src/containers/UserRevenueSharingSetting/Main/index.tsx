import React from 'react';
import { Tabs } from 'antd';

import RevenueSettingDetail from './RevenueSettingDetail';
import { t } from 'src/libs/I18nService';
import { RevenueSharingSetting } from 'src/stores/domain/user/userRevenueSharing/setting';

const { TabPane } = Tabs;

type Props = {
  loading: boolean;
  entity: RevenueSharingSetting | null;
};

const Main: React.FC<Props> = (props) => {
  return (
    <Tabs>
      <TabPane key="detail" tab={t('label.user_revenue_setting_detail')}>
        <RevenueSettingDetail {...props} />
      </TabPane>
    </Tabs>
  );
};

export default Main;
