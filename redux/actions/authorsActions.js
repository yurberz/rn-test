import { createAction } from "@reduxjs/toolkit";

const getAuthorsReq = createAction("@authors/getAuthorsReq");
const getAuthorsSuc = createAction("@authors/getAuthorsSuc");
const getAuthorsErr = createAction("@authors/getAuthorsErr");

const authorsActions = {
  getAuthorsReq,
  getAuthorsSuc,
  getAuthorsErr,
};

export default authorsActions;
