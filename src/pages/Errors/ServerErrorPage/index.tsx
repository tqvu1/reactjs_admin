import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Result
      status={500}
      title={500}
      subTitle="The server has been deserted for a while. Please be patient or try again later."
      extra={
        <Link to="/">
          <Button type="primary">Dashboard</Button>
        </Link>
      }
    />
  );
};

export default NotFoundPage;
