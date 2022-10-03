import c from '../constants';

export const selectedCategory = (categoryId) => ({
  type: c.CHANGE_ACTIVE_CATEGORY,
  payload: categoryId
});
