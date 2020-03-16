import React, { useEffect, useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar/AppBar';
import SwipeableViews from 'react-swipeable-views';
import { getSchedule } from './services/ScheduleService';
import { isHoliday } from './utils/Time';
import SubjectsList from './components/SubjectsList';

const App = () => {
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

  const fetchSchedule = async () => {
    getSchedule().then(items => setSubjects(items));
  };

  useEffect(() => {
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
        index={index}
        onChangeIndex={handleChangeIndex}
        style={{ height: 'calc(100vh - 48px)' }}>
        <SubjectsList subjects={subjects.monday} index={index} />
        <SubjectsList subjects={subjects.tuesday} index={index} />
        <SubjectsList subjects={subjects.wednesday} index={index} />
        <SubjectsList subjects={subjects.thursday} index={index} />
        <SubjectsList subjects={subjects.friday} index={index} />
      </SwipeableViews>
    </>
  );
};

export default App;
