import React from 'react';
import { Button, Card, Divider, Table } from 'antd';
import { SyncOutlined, DownloadOutlined } from '@ant-design/icons';

import useTable from 'src/utils/hooks/useTable';
import { Transaction } from 'src/stores/domain/transactionManage/transaction/list';
import columns from './columns';
import { t } from 'src/libs/I18nService';

type Props = {
  loading: boolean;
  entities: Transaction[];
};

const TransactionListTable: React.FC<Props> = ({ loading, entities }) => {
  const { pagination, rowSelection, Selected, rowSelected } =
    useTable<Transaction>();

  return (
    <Card
      title={
        <React.Fragment>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            disabled={!rowSelected.length}
          >
            {t('button.download_excel')}
          </Button>
          <Divider type="vertical" />
          <Button
            type="primary"
            // disabled={!rowSelected.length}
            disabled={true}
            icon={<SyncOutlined />}
          >
            {t('button.reset_pass')}
          </Button>
          <Divider type="vertical" />
          <span>
            <Selected>
              {t('rows_selected', {
                count: rowSelected.length,
              })}
            </Selected>
          </span>
        </React.Fragment>
      }
    >
      <Table
        rowKey="id"
        size="small"
        columns={columns(t)}
        dataSource={entities}
        loading={loading}
        pagination={pagination}
        rowSelection={rowSelection}
        scroll={{ x: 1400 }}
      />
    </Card>
  );
};

export default TransactionListTable;
