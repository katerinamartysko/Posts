const INITIAL_STATE = {
  categories: [
    { id: 1, title: 'Active', isActive: true },
    { id: 2, title: 'History', isActive: false },
    { id: 3, title: 'Unanswered', isActive: false },
    { id: 4, title: 'Archived', isActive: false }
  ]
};

export const categories = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_CATEGORY': {
      const cardId = action.payload;
      return {
        ...state,
        categories: state.categories.map(card => {
          card.isActive = cardId === card.id;
          return card
        })
      };
    }
    default:
      return state;
  }
};
