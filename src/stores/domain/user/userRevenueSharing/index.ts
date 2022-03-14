import { combineReducers } from '@reduxjs/toolkit';

import { reducer as list, default as listActions } from './list';
import { reducer as setting, default as settingActions } from './setting';

export { listActions, settingActions };
export default combineReducers({ list, setting });
