import React from 'react';
import { Button, Card, Divider, Table } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import useTable from 'src/utils/hooks/useTable';
import { Like } from 'src/stores/domain/user/userLiked/list';
import columns from './columns';
import { t } from 'src/libs/I18nService';

type Props = {
  loading: boolean;
  entities: Like[];
};

const UserTable: React.FC<Props> = ({ loading, entities }) => {
  const { pagination, rowSelection, Selected, rowSelected } = useTable<Like>();

  return (
    <Card
      title={
        <React.Fragment>
          <Button
            type="primary"
            disabled={!rowSelected.length}
            icon={<DownloadOutlined />}
          >
            {t('button.download_excel')}
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
        scroll={{ x: 1200 }}
      />
    </Card>
  );
};

export default UserTable;
