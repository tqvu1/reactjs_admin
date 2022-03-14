import React from 'react';
import { Dropdown, Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { LogoutOutlined, CaretDownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import LocalStorage from 'src/utils/LocalStorage';

const DropdownList: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const logout = () => {
    LocalStorage.removeInfo();
    navigate('/login');
  };

  const overlay = (
    <Menu>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={logout}>
        {t('button.logout')}
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      placement="bottomRight"
      trigger={['click']}
      className="fs-18 lh-64"
      overlay={overlay}
    >
      <CaretDownOutlined />
    </Dropdown>
  );
};

export default DropdownList;
