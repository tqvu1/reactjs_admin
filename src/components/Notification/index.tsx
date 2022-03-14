import React, { useEffect } from 'react';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';

type Props = {
  handleOffNotification: () => void;
  isNotice: boolean;
  type?: 'success' | 'info' | 'warning' | 'error';
  message?: string;
  description?: string;
};

const Notification = (props: Props) => {
  const { t } = useTranslation();
  const {
    isNotice,
    type = 'open',
    message,
    description,
    handleOffNotification,
  } = props;

  useEffect(() => {
    if (isNotice) {
      notification[type]({
        message: t(message!),
        description,
      });
      handleOffNotification();
    }
  });

  return <React.Fragment />;
};

export default Notification;
