const getPosts = (state) => state.posts?.data;

const postsSelector = {
  getPosts,
};

export default postsSelector;
