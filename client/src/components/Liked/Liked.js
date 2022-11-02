import React from 'react';
import { useSelector } from 'react-redux';
import MyCard from '../Card/Card';

export default function Liked() {
  const likedCards = useSelector((store) => store.likes);
  return (
    <div>
      {likedCards
        && likedCards.map((el) => (
          <MyCard
            key={el.id}
            img={el.img}
            name={el.name}
            id={el.id}
          />
        ))}
    </div>
  );
}
