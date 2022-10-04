import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ButtonCard from '../components/UI/Button/ButtonCard';
import classes from '../components/UI/Button/ButtonCard.module.css';
import { selectedCategory } from '../store/categories/actions';

const NoMatch = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);

  const selectActive = (categoryId) => {
    dispatch(selectedCategory(categoryId));
  };

  return (
    <div>
      <div className="card">
        {categories.map(category => (
          <ButtonCard
            key={category.id}
            className={category.isActive && classes.buttonCard__active}
            onClick={() => selectActive(category.id)}
          >
            {category.title}
          </ButtonCard>
        ))}
      </div>

        <Link to="/posts"> ВЕРНУТЬСЯ К ПОСТАМ</Link>
    </div>
  );
};

export default NoMatch;
