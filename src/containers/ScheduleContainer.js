import React from 'react';
import { connect } from 'react-redux';
import Schedule from '../components/Schedule';
import { fetchSchedule } from '../store/schedule/actions';
import { changeIndex } from '../store/schedule/actions';

class ScheduleContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchSchedule());
  }

  handleChange = (index) => {
    this.props.dispatch(changeIndex(index));
  };

  render() {
    const { loading, subjects, index } = this.props;

    return (
        <Schedule
            loading={loading}
            subjects={subjects}
            index={index}
            onChangeIndex={this.handleChange}/>
    );
  }
}

const putStateToProps = (state) => {
  return {
    loading: state.schedule.loading,
    subjects: state.schedule.schedule,
    index: state.schedule.index
  };
};

export default connect(putStateToProps, null)(ScheduleContainer)