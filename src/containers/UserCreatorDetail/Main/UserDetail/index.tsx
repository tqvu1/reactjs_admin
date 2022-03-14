import React from 'react';
import { Button, Card, Divider, Empty, Popconfirm, Space } from 'antd';
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  SaveOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { isEqual, omit } from 'lodash';

import { RowDetail } from 'src/components/Common';
import useForm from './useForm';
import ActivityStatusSelect from './ActivityStatusSelect';
import { UserCreatorEntity } from 'src/stores/domain/user/userCreator/detail';
import ActivitiesStatus from 'src/components/Common/ActivitiesStatus';
import { formatDate, formatCount, isSharingRevenue } from 'src/utils/Helpers';
import { t } from 'src/libs/I18nService';
import history from 'src/libs/history';

type Props = {
  loading: boolean;
  userCreatorEntity: UserCreatorEntity | null;
};

const UserDetail: React.FC<Props> = ({ loading, userCreatorEntity }) => {
  const { formik } = useForm(userCreatorEntity);

  const { values, initialValues, status, setStatus, isSubmitting, submitForm } =
    formik;

  const disabled = isEqual(omit(values, 'other'), omit(initialValues, 'other'));

  const cardTitle = (
    <React.Fragment>
      <UserOutlined />
      <span style={{ marginLeft: 8 }}>
        {t('title.user_detail', { name: userCreatorEntity?.name })}
      </span>
    </React.Fragment>
  );

  return (
    <Card title={cardTitle} style={{ width: '80%' }}>
      {userCreatorEntity ? (
        <React.Fragment>
          <RowDetail title={t('label.user_id')} value={userCreatorEntity.id} />
          <RowDetail title={t('label.email')} value={userCreatorEntity.email} />
          <RowDetail
            title={t('label.series_count')}
            value={formatCount(userCreatorEntity.series_count)}
          />
          <RowDetail
            title={t('label.login_times')}
            value={formatCount(userCreatorEntity.login_times)}
          />
          <RowDetail
            title={t('label.is_sharing_revenue')}
            value={isSharingRevenue(userCreatorEntity.is_sharing_revenue)}
            style={{ marginBottom: 16 }}
          />
          <RowDetail
            title={t('label.last_visit')}
            value={formatDate(userCreatorEntity.last_visited_at)}
          />
          <RowDetail
            title={t('label.signup_date')}
            value={formatDate(userCreatorEntity.insert_dt)}
          />
          <RowDetail
            title={t('label.activity_status')}
            value={<ActivitiesStatus is_blocked={userCreatorEntity.is_block} />}
            actions={<ActivityStatusSelect formik={formik} />}
          />
          <RowDetail title={t('label.bio')} value={userCreatorEntity.bio} />
          <RowDetail
            title={t('label.wallet_address')}
            value={userCreatorEntity.wallet_address}
          />
          <Divider />
          <Space>
            <Popconfirm
              title={t('message.delete_confirm', { name: t('user') })}
            >
              <Button
                icon={<DeleteOutlined />}
                type="primary"
                danger
                disabled={true}
              >
                {t('button.delete')}
              </Button>
            </Popconfirm>
            <Popconfirm
              visible={status === 'open'}
              disabled={disabled}
              title={t('message.save_confirm', { name: t('user') })}
              onConfirm={submitForm}
              okButtonProps={{ loading: isSubmitting }}
              onCancel={() => setStatus('done')}
            >
              <Button
                onClick={() => setStatus('open')}
                icon={<SaveOutlined />}
                type="primary"
                disabled={disabled}
              >
                {t('button.save')}
              </Button>
            </Popconfirm>
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

export default UserDetail;
