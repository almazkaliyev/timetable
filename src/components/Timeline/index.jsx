import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getEvents from '../../store/events/actions';
import SkeletonEventList from './SkeletonEventList';
import EventList from './EventList';

import './Timeline.css';

const Timeline = (props) => {
  const { isLoading, events, dispatch } = props;

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  return (
    <div className="timeline">
      {isLoading ? <SkeletonEventList /> : <EventList events={events} /> }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.events.isLoading,
    events: state.events.items,
  };
};

export default connect(mapStateToProps)(Timeline);
