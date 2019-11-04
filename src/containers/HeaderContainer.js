import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { changeIndex } from '../store/schedule/actions'

class HeaderContainer extends React.Component {
  handleChangeIndex = (event, index) => {
    this.props.dispatch(changeIndex(index));
  };

  render() {
    const { index } = this.props;

    return (
        <Header index={index} onChangeIndex={this.handleChangeIndex}/>
    );
  }
}

const putStateToProps = (state) => {
  return {
    index: state.schedule.index
  };
};

export default connect(putStateToProps)(HeaderContainer)