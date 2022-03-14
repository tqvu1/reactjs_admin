import React from 'react';

import { t } from 'src/libs/I18nService';

type Props = {
  status: number | string;
};

const SaleStatus: React.FC<Props> = ({ status }) => {
  let text: string;

  switch (status) {
    case 1:
      text = t('sale_status.sold');
      break;
    case 2:
      text = t('sale_status.error');
      break;
    default:
      text = '';
      break;
  }

  return <span>{text}</span>;
};

export default SaleStatus;
