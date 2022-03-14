import React from 'react';
import { Tabs } from 'antd';

import { CommentEntity } from 'src/stores/domain/comment/list';
import CommentDetailPatial from './CommentDetailPatial';
import { t } from 'src/libs/I18nService';

const { TabPane } = Tabs;

type Props = {
  loading: boolean;
  commentEntity: CommentEntity | null;
};

const Main: React.FC<Props> = (props) => {
  return (
    <Tabs>
      <TabPane key="detail" tab={t('label.detail')}>
        <CommentDetailPatial {...props} />
      </TabPane>
    </Tabs>
  );
};

export default Main;
