import React from 'react';
import { BeerTypes } from '../../types/Beer';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Beer(props: BeerTypes) {
  const { beer } = props;

  return (
    <div className="beers-list">
      {beer.map(({ id, image_url, name, description, tagline }) => (
        <div key={id} className="beer">
          <img src={image_url} alt="Buzz" />
          <h3>{name}</h3>
          <span>{tagline}</span>
          <small>{description}</small>
        </div>
      ))}
    </div>
  );
}

export default Beer;
