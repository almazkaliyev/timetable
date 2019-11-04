import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

const Header = ({ ...props }) => {
  const { index } = props;

  return (
      <AppBar position="static" color="default">
        <Tabs value={index} indicatorColor="primary" variant="fullWidth">
          <Tab label="ПН"/>
          <Tab label="ВТ"/>
          <Tab label="СР"/>
          <Tab label="ЧТ"/>
          <Tab label="ПТ"/>
        </Tabs>
      </AppBar>
  )
};

export default Header