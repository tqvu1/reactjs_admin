import React from 'react';
import { Button, Card, Empty, Space } from 'antd';
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  SaveOutlined,
} from '@ant-design/icons';

import { RowDetail } from 'src/components/Common';
// import useForm from './useForm';
import { RevenueSharingSetting } from 'src/stores/domain/user/userRevenueSharing/setting';
import { t } from 'src/libs/I18nService';
import history from 'src/libs/history';

type Props = {
  loading: boolean;
  entity: RevenueSharingSetting | null;
};

const RevenueSettingDetail: React.FC<Props> = ({ loading, entity }) => {
  // const { formik } = useForm(entity);

  return (
    <Card style={{ width: '80%' }}>
      {entity ? (
        <React.Fragment>
          <RowDetail title={t('label.user_id')} value={entity.user_id} />
          <RowDetail title={t('label.nick_name')} value={entity.nickname} />
          <RowDetail title={t('label.email')} value={entity.email} />
          <Space>
            <Button
              icon={<DeleteOutlined />}
              type="primary"
              danger
              disabled={true}
            >
              {t('button.delete')}
            </Button>
            <Button icon={<SaveOutlined />} type="primary">
              {t('button.save')}
            </Button>
            <Button
              type="primary"
              style={{ width: '100%' }}
              icon={<ArrowLeftOutlined />}
              onClick={() => history.back()}
            >
              {t('button.back')}
            </Button>
          </Space>
        </React.Fragment>
      ) : (
        <Empty />
      )}
    </Card>
  );
};

export default RevenueSettingDetail;
