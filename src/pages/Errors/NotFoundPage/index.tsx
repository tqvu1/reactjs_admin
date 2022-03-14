import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Result
      status={404}
      title={404}
      subTitle="That page doesn't exist or is unavailable."
      extra={
        <Link to="/">
          <Button type="primary">Dashboard</Button>
        </Link>
      }
    />
  );
};

export default NotFoundPage;
