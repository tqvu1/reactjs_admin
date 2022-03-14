import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/stores';

import Main from './Main';

const TransactionListContainer: React.FC = () => {
  const props = useSelector(
    (state: RootState) => state.domain.transactionManage.transaction.list,
  );

  return <Main {...props} />;
};

export default TransactionListContainer;
