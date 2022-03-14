import React from 'react';
import { Button, Card, Divider, Empty, Popconfirm, Space } from 'antd';
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  SaveOutlined,
} from '@ant-design/icons';

import { RowDetail } from 'src/components/Common';
import useForm from './useForm';
import { CommentEntity } from 'src/stores/domain/comment/list';
import { formatDate, formatCount } from 'src/utils/Helpers';
import { t } from 'src/libs/I18nService';
import history from 'src/libs/history';

type Props = {
  loading: boolean;
  commentEntity: CommentEntity | null;
};

const UserDetail: React.FC<Props> = ({ loading, commentEntity }) => {
  const { formik } = useForm(commentEntity);

  const { status, setStatus, isSubmitting, submitForm } = formik;

  const cardTitle = (
    <React.Fragment>
      <span style={{ marginLeft: 8 }}>
        {commentEntity?.series_title} {commentEntity?.episode}
      </span>
    </React.Fragment>
  );

  return (
    <Card title={cardTitle} style={{ width: '80%' }}>
      {commentEntity ? (
        <React.Fragment>
          <RowDetail
            title={t('label.nickname')}
            value={commentEntity.nickname}
          />
          <RowDetail title={t('label.user_id')} value={commentEntity.id} />
          <RowDetail
            title={t('label.comment_content')}
            value={commentEntity.comment_content}
          />
          <RowDetail
            title={t('label.comment_date')}
            value={formatDate(commentEntity.comment_date)}
          />
          <RowDetail title={t('label.creator')} value={commentEntity.creator} />
          <RowDetail
            title={t('label.number_of_times_reported')}
            value={commentEntity.number_of_times_reported}
          />
          <RowDetail
            title={t('label.like')}
            value={formatCount(commentEntity.like)}
          />
          <RowDetail
            title={t('label.dislike')}
            value={formatCount(commentEntity.dislike)}
          />
          <Divider />
          <Space>
            <Popconfirm
              title={t('message.delete_confirm', { name: t('comment') })}
            >
              <Button icon={<DeleteOutlined />} type="primary" danger>
                {t('button.delete')}
              </Button>
            </Popconfirm>
            <Popconfirm
              visible={status === 'open'}
              title={t('message.save_confirm', { name: t('commentt') })}
              onConfirm={submitForm}
              okButtonProps={{ loading: isSubmitting }}
              onCancel={() => setStatus('done')}
            >
              <Button
                onClick={() => setStatus('open')}
                icon={<SaveOutlined />}
                type="primary"
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
