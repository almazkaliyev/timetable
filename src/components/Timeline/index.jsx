import React from 'react';
import EventList from './EventList';

import './Timeline.css';

export default ({ events }) => {
  return (
    <div className="timeline">
      <EventList events={events} />
    </div>
  );
};
