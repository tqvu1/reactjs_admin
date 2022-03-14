import React, { useEffect } from 'react';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';
import { CheckCircleFilled, WarningFilled } from '@ant-design/icons';

type Props = {
  handleOffNotification: () => void;
  isNotice: boolean;
  type?: 'success' | 'info' | 'warning' | 'error';
  message?: string;
  description?: string;
};

const Notification = (props: Props) => {
  const {
    isNotice,
    type = 'open',
    message,
    description,
    handleOffNotification,
  } = props;

  const { t } = useTranslation();

  useEffect(() => {
    if (isNotice) {
      notification[type]({
        message: t(message as any),
        description,
        icon: type === 'success' ? <CheckCircleFilled /> : <WarningFilled />,
      });
      handleOffNotification();
    }
  });

  return <React.Fragment />;
};

export default Notification;
