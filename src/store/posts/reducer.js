import c from '../constants';

const INITIAL_STATE = {
  posts: []
};

export const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case c.GET_ALL_POSTS : {
      const posts = action.payload;

      return {
        ...state,
        posts: [...state.posts, ...posts]
      };

    }
    default:
      return state;
  }
};

