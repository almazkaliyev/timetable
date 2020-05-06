import React from 'react';
import Card from '../Card';
import CardTitle from '../Card/CardTitle';
import CardInfo from '../Card/CardInfo';
import CardInfoText from '../Card/CardInfoText';

const EventListItem = ({ event }) => {
  const { time, title, teachers, location } = event;

  return (
    <li className={`${event.isActive ? 'active' : ''} ${event.isCompleted ? 'completed' : ''}`}>
      <span className="time">{time}</span>
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
