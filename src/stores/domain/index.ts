import { combineReducers } from '@reduxjs/toolkit';

import user from './user';
import comment from './comment';
import transactionManage from './transactionManage';
import { reducer as me } from './me';

export default combineReducers({
  me,
  user,
  comment,
  transactionManage,
});
