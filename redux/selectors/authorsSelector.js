const getAuthors = (state) => state.authors?.data;

const authorsSelector = {
  getAuthors,
};

export default authorsSelector;
