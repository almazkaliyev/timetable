import React from 'react';
import { connect } from 'react-redux';
import Schedule from '../components/Schedule';
import { fetchSchedule, setIndex } from '../store/schedule/actions';

class ScheduleContainer extends React.Component {
  componentDidMount() {
    const { fetchProjects } = this.props;
    fetchProjects();
  }

  handleChange = index => {
    const { changeIndex } = this.props;
    changeIndex(index);
  };

  render() {
    const { loading, subjects, index } = this.props;

    return (
      <Schedule
        loading={loading}
        subjects={subjects}
        index={index}
        onChangeIndex={this.handleChange}
      />
    );
  }
}

const putStateToProps = state => {
  return {
    loading: state.schedule.loading,
    subjects: state.schedule.schedule,
    index: state.schedule.index,
  };
};

const putDispatchToProps = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchSchedule()),
    changeIndex: index => dispatch(setIndex(index)),
  };
};

export default connect(
  putStateToProps,
  putDispatchToProps,
)(ScheduleContainer);
