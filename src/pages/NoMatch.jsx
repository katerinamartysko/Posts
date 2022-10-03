import React, { useState } from 'react';
import ButtonCard from '../components/UI/Button/ButtonCard';
import classes from '../components/UI/Button/ButtonCard.module.css';

const cards = [
  { id: 1, title: 'Active', isActive: true },
  { id: 2, title: 'History', isActive: false },
  { id: 3, title: 'Unanswered', isActive: false },
  { id: 4, title: 'Archived', isActive: false }
];

const NoMatch = () => {
  const [activeCards, setActiveCards] = useState(cards);

  const selectActive = (cardId) => {
   const change = activeCards.map(card => {
      card.isActive = cardId === card.id;

      return card
    });
   setActiveCards(change)
  };

  return (
    <div className="card">
      {activeCards.map(card => (
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
