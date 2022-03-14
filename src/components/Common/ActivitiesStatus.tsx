import React from 'react';
import { Badge } from 'antd';

import { t } from 'src/libs/I18nService';

type Props = {
  is_blocked: number | string | boolean;
  text?: string;
};

const ActivitiesStatus: React.FC<Props> = ({ is_blocked, text }) => {
  const props = {
    color: is_blocked ? 'red' : 'green',
    text: text || t(is_blocked ? 'blocked' : 'active'),
  };

  return <Badge {...props} />;
};

export default ActivitiesStatus;
