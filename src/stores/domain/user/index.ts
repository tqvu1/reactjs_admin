import { combineReducers } from '@reduxjs/toolkit';

import userCreator from './userCreator';
import userLiked from './userLiked';
import userRevenueSharing from './userRevenueSharing';

export default combineReducers({
  userCreator,
  userLiked,
  userRevenueSharing,
});
