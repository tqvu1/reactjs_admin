import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { unstable_HistoryRouter as Router } from 'react-router-dom';
import 'moment/locale/ko';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from 'src/stores';
import { I18n } from 'src/libs/I18nService';
import theme from 'src/styles';
import history from 'src/libs/history';

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={I18n}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
