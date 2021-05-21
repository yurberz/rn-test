import { combineReducers } from "@reduxjs/toolkit";

import authorsReducer from "./authorsReducer";
import postsReducer from "./postsReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  authors: authorsReducer,
  posts: postsReducer,
  loading: loadingReducer,
});

export default rootReducer;
