import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const ForbiddenPage = () => {
  return (
    <Result
      status={403}
      title={403}
      subTitle="Sorry, you are forbidden to access this page."
      extra={
        <Link to="/">
          <Button type="primary">Dashboard</Button>
        </Link>
      }
    />
  );
};

export default ForbiddenPage;
