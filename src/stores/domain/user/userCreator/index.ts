import { combineReducers } from '@reduxjs/toolkit';

import { reducer as list, default as listActions } from './list';
import { reducer as detail, default as detailActions } from './detail';

export { listActions, detailActions };
export default combineReducers({ list, detail });
