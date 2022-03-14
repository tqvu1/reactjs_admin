import React from 'react';
import { ConfigProvider } from 'antd';
import ko_KR from 'antd/es/locale/ko_KR';
import en_US from 'antd/es/locale/en_US';
import 'moment/locale/ko';
import 'antd/dist/antd.less';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

import GlobalStyled from 'src/styles/global';
import Notification from 'src/containers/Notification';
import { getOriginUrl } from 'src/utils/Helpers';
import logo from 'src/images/logo.png';
import { RootState } from 'src/stores';
import { useRoutes } from 'react-router-dom';
import routeConfig from 'src/routes';

const App: React.FC = () => {
  const lang = useSelector((state: RootState) => state.ui.i18n.lang);
  const routes = useRoutes(routeConfig);

  return (
    <ConfigProvider locale={lang === 'ko' ? ko_KR : en_US}>
      <Helmet>
        <meta name="description" content="떴다마켓" />
        <meta property="og:title" content="떴다마켓" />
        <meta
          property="og:description"
          content="떴다마켓"
          data-react-helmet={true}
        />
        <meta property="og:url" content={window.location.pathname} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="떴다마켓" />
        <meta property="og:locale" content="en" />
        <meta property="og:image" content={getOriginUrl() + logo} />
        <meta name="image" content={getOriginUrl() + logo} />
        <link
          rel="icon"
          type="image/png"
          href={logo}
          sizes="16x16"
          data-react-helmet={true}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {routes}
      <GlobalStyled />
      <Notification />
    </ConfigProvider>
  );
};

export default App;
