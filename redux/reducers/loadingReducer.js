import { createReducer } from "@reduxjs/toolkit";

import authorsActions from "../actions/authorsActions";
import postsActions from "../actions/postsActions";

const loadingReducer = createReducer(false, {
  [authorsActions.getAuthorsReq]: () => true,
  [authorsActions.getAuthorsSuc]: () => false,
  [authorsActions.getAuthorsErr]: () => false,

  [postsActions.getPostsReq]: () => true,
  [postsActions.getPostsSuc]: () => false,
  [postsActions.getPostsErr]: () => false,
});

export default loadingReducer;
