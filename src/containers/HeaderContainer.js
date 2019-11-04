import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class HeaderContainer extends React.Component {
  render() {
    const { index } = this.props;

    return (
        <Header
            index={index}/>
    );
  }
}

const putStateToProps = (state) => {
  return {
    index: state.schedule.index
  };
};

export default connect(putStateToProps, null)(HeaderContainer)