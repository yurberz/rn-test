import { createReducer } from "@reduxjs/toolkit";

import authorsActions from "../actions/authorsActions";

const authorsReducer = createReducer(null, {
  [authorsActions.getAuthorsSuc]: (_, { payload }) => {
    return {
      data: payload,
    };
  },
});

export default authorsReducer;
