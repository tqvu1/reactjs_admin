import React from 'react';

import { t } from 'src/libs/I18nService';

type Props = {
  type: number | string;
};

const TransactionType: React.FC<Props> = ({ type }) => {
  let text: string;

  switch (type) {
    case 1:
      text = t('transaction_type.each_episode');
      break;
    case 2:
      text = t('transaction_type.full_series');
      break;
    default:
      text = '';
      break;
  }

  return <span>{text}</span>;
};

export default TransactionType;
