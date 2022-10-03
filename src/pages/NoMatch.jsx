import React from 'react';
import ButtonCard from '../components/UI/Button/ButtonCard';
import classes from '../components/UI/Button/ButtonCard.module.css';
import { useDispatch, useSelector } from 'react-redux';

const NoMatch = () => {
  const dispatch = useDispatch()
  const cards = useSelector(state => state.categories.categories);

  const selectActive = (cardId) => {
    dispatch({type: 'CHANGE_ACTIVE_CATEGORY', payload: cardId})
    }
  return (
    <div className="card">
      {cards.map(card => (
        <ButtonCard
          key={card.id}
          className={card.isActive && classes.buttonCard__active}
          onClick={() => selectActive(card.id)}
        >
          {card.title}
        </ButtonCard>
      ))}
    </div>
  );
};

export default NoMatch;
