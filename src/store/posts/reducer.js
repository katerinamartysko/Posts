import c from '../constants';

const INITIAL_STATE = {
  posts: []
};

export const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case c.GET_POSTS : {
      const posts = action.payload;
      return {
        ...state,
        posts: [...state.posts, ...posts]
      };
    }

    case c.CREATE_POST : {
      const newPost = action.payload;
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    }case c.DELETE_POST: {
      const posts = action.payload;
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== posts.id)
      };
    }

    default:
      return state;
  }
};
