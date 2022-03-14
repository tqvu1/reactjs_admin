import { combineReducers } from '@reduxjs/toolkit';

import { reducer as notification } from './notification';
import { reducer as app } from './app';
import { reducer as i18n } from './i18n';

export default combineReducers({ notification, app, i18n });
