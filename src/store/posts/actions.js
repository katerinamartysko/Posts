import c from '../constants';

export const getPosts = (posts) => ({
  type: c.GET_POSTS,
  payload: posts
});

export const createPost = (newPost) => ({
  type: c.CREATE_POST,
  payload: newPost
});

export const deletePost = (post) => ({
  type: c.DELETE_POST,
  payload: post
});

export const changePage = (post) => ({
  type: c.CHANGE_PAGE,
  payload: post
});

