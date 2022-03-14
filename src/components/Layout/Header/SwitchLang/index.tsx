import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { message, Select } from 'antd';
import { switchLang } from 'src/stores/ui/i18n';
import { Dispatch, RootState } from 'src/stores';

const SwitchLang: React.FC = () => {
  const lang = useSelector((state: RootState) => state.ui.i18n.lang);
  const dispatch = useDispatch<Dispatch>();
  const { t } = useTranslation();

  const switchLanguage = async (val: string) => {
    const key = 'lang';
    message.loading({ content: t('loading'), key });
    // @ts-ignore
    await dispatch(switchLang(lang));
    message.destroy(key);
  };

  return (
    <Select
      style={{ width: 80 }}
      size="small"
      onChange={switchLanguage}
      value={lang}
    >
      <Select.Option value="ko">🇰🇷 KO</Select.Option>
      <Select.Option value="en">🇬🇧 EN</Select.Option>
    </Select>
  );
};

export default SwitchLang;
