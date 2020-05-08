import React, { useEffect }  from 'react';
import { connect } from 'react-redux';
import SkeletonEventList from './SkeletonEventList';
import EventList from './EventList';
import { fetchEventsByListId } from '../../store/events/actions';

import './index.css';

const Timeline = (props) => {
  const { fetchEvents, isLoading, events, match } = props;

  useEffect(() => {
    fetchEvents(match.params.listId);
  }, [match.params.listId]);

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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: (listId) => dispatch(fetchEventsByListId(listId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
