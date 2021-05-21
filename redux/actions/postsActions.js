import { createAction } from "@reduxjs/toolkit";

const getPostsReq = createAction("@posts/getPostsReq");
const getPostsSuc = createAction("@posts/getPostsSuc");
const getPostsErr = createAction("@posts/getPostsErr");

const postsActions = {
  getPostsReq,
  getPostsSuc,
  getPostsErr,
};

export default postsActions;
