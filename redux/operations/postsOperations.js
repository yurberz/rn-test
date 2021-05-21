import api from "../../services/api";
import postsActions from "../actions/postsActions";

const getPostsOperation = (id) => async (dispatch) => {
  dispatch(postsActions.getPostsReq());

  try {
    const data = await api.getPosts(id);

    dispatch(postsActions.getPostsSuc(data));
  } catch (err) {
    dispatch(postsActions.getPostsErr(err));
    throw err;
  }
};

const postsOperations = {
  getPostsOperation,
};

export default postsOperations;
