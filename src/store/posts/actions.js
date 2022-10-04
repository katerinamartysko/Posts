import c from '../constants';

export const getPosts = (posts) => ({
  type: c.GET_ALL_POSTS,
  payload: posts
});
