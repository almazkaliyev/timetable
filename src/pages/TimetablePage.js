import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {AppBar, CircularProgress, makeStyles, Tab, Tabs, useTheme} from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import Day from '../components/Day'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
  }
}));

function TimetablePage() {
  const classes = useStyles();
  const theme = useTheme();
  const date = new Date();
  let today = date.getDay();
  const day = (today === 0 || today === 6) ? 0 : --today;
  const [value, setValue] = useState(day);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const [subjects, setSubjects] = useState({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: []
  });
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get('https://my-json-server.typicode.com/GR2EN/timetable/db');
      setSubjects(result.data);
      setLoading(false);
    };

    fetchData().then(() => console.log('Loading data'));
  }, []);

  return isLoading ? (
      <div className={classes.container}>
        <CircularProgress/>
      </div>
  ) : (
      <div>
        <AppBar
            position='static'
            color='default'>
          <Tabs
              indicatorColor='primary'
              variant='fullWidth'
              value={value}
              onChange={handleChange}>
            <Tab label='ПН'/>
            <Tab label='ВТ'/>
            <Tab label='СР'/>
            <Tab label='ЧТ'/>
            <Tab label='ПТ'/>
          </Tabs>
        </AppBar>
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}>
          <Day data={subjects.monday} isToday={day === 0}/>
          <Day data={subjects.tuesday} isToday={day === 1}/>
          <Day data={subjects.wednesday} isToday={day === 2}/>
          <Day data={subjects.thursday} isToday={day === 3}/>
          <Day data={subjects.friday} isToday={day === 4}/>
        </SwipeableViews>
      </div>
  )
}

export default TimetablePage
