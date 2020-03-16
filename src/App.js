import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar/AppBar';
import SwipeableViews from 'react-swipeable-views';
import { getSchedule } from './services/ScheduleService';
import { isHoliday } from './utils/Time';
import SubjectsList from './components/SubjectsList';

const App = ({ ...props }) => {
  const { classes } = props;

  const today = new Date().getDay();
  const dayIndex = isHoliday(today) ? 0 : today - 1;

  const [index, setIndex] = useState(dayIndex);
  const [subjects, setSubjects] = useState({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  });

  const handleChange = (event, value) => {
    setIndex(value);
  };

  const handleChangeIndex = value => {
    setIndex(value);
  };

  useEffect(() => {
    const fetchSchedule = async () => {
      getSchedule().then(items => setSubjects(items));
    };

    fetchSchedule();
  }, []);

  return (
    <>
      <AppBar position="static" color="default">
        <Tabs value={index} onChange={handleChange} indicatorColor="primary" variant="fullWidth">
          <Tab label="ПН" />
          <Tab label="ВТ" />
          <Tab label="СР" />
          <Tab label="ЧТ" />
          <Tab label="ПТ" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        className={classes.swipeContainer}
        index={index}
        onChangeIndex={handleChangeIndex}>
        <SubjectsList subjects={subjects.monday} index={index} />
        <SubjectsList subjects={subjects.tuesday} index={index} />
        <SubjectsList subjects={subjects.wednesday} index={index} />
        <SubjectsList subjects={subjects.thursday} index={index} />
        <SubjectsList subjects={subjects.friday} index={index} />
      </SwipeableViews>
    </>
  );
};

const styles = theme => ({
  swipeContainer: {
    minHeight: `calc(100vh - 48px - ${theme.spacing(0.5)}px)`,
  },
});

export default withStyles(styles)(App);
