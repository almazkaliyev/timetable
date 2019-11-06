import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { setIndex } from '../store/schedule/actions';

class HeaderContainer extends React.Component {
  handleChangeIndex = (event, index) => {
    const { changeIndex } = this.props;
    changeIndex(index);
  };

  render() {
    const { index } = this.props;

    return <Header index={index} onChangeIndex={this.handleChangeIndex} />;
  }
}

const putStateToProps = state => {
  return {
    index: state.schedule.index,
  };
};

const putDispatchToProps = dispatch => {
  return {
    changeIndex: index => dispatch(setIndex(index)),
  };
};

export default connect(
  putStateToProps,
  putDispatchToProps,
)(HeaderContainer);
