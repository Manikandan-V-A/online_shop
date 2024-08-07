// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardBoat } from './CardBoat';

export function HomePage1() {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate('/next');
  };

  return (
    <div>
      <CardBoat/>
      <h1>Home Page</h1>
      <button onClick={goToNextPage}>Go to Next Page</button>
    </div>
  );
}

