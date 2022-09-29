import React from 'react';
import { Link } from 'react-router-dom';
const NoMatch = () => {
      return (
        <div>
          <h2 style={{color: 'red'}}>ВЫ ПЕРЕШЛИ НА НЕСУЩЕСТВУЮЩУЮ СТРАНИЦУ!</h2>
          <p>
            <Link to="/"> ВЕРНИТЕСЬ НА ГЛАВНУЮ СТРАНИЦУ </Link>
          </p>
        </div>
  );
};

export default NoMatch;
