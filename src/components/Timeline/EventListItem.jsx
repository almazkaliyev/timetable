import React from 'react';
import Card from '../Card';
import CardTitle from '../Card/CardTitle';
import CardInfo from '../Card/CardInfo';
import CardInfoText from '../Card/CardInfoText';

const EventListItem = ({ event }) => {
  const { startTime, title, teachers, location, isActive, isCompleted } = event;

  return (
    <li className={`${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
      <span className="time">{startTime}</span>
      <Card>
        <CardTitle>{title}</CardTitle>
        <CardInfo>
          <CardInfoText>{teachers}</CardInfoText>
          <CardInfoText>{location}</CardInfoText>
        </CardInfo>
      </Card>
    </li>
  );
};

export default EventListItem;
