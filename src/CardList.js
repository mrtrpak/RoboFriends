import React from 'react';

import Card from './Card';

const CardList = ({ robots }) => {
  
  const cardComponent = robots.map((user, i) => {
    const robot = robots[i];
    return (
      <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
    );
  });

  return (
    <div>
      {cardComponent}
    </div>
  );
};

export default CardList;