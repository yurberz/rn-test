import api from "../../services/api";
import authorsActions from "../actions/authorsActions";

const getAuthorsOperation = () => async (dispatch) => {
  dispatch(authorsActions.getAuthorsReq());

  try {
    const data = await api.getAuthors();

    dispatch(authorsActions.getAuthorsSuc(data));
  } catch (err) {
    dispatch(authorsActions.getAuthorsErr(err));
    throw err;
  }
};

const authorsOperations = {
  getAuthorsOperation,
};

export default authorsOperations;
