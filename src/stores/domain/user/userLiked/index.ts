import { combineReducers } from '@reduxjs/toolkit';

import { reducer as list, default as listActions } from './list';

export { listActions };
export default combineReducers({ list });
