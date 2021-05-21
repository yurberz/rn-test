import { createReducer } from "@reduxjs/toolkit";

import postsActions from "../actions/postsActions";

const postsReducer = createReducer(null, {
  [postsActions.getPostsSuc]: (_, { payload }) => {
    return {
      data: payload,
    };
  },
});

export default postsReducer;
