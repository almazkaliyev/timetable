import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import SubjectsList from './SubjectsList';
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from '@material-ui/core';

const Schedule = ({ ...props }) => {
  const { classes, loading, subjects, index } = props;

  return loading
      ? (
          <div className={`${classes.container} ${classes.loading}`}>
            <CircularProgress/>
          </div>
      ) : (
          <div className={classes.container}>
            <SwipeableViews index={index}>
              <SubjectsList subjects={subjects.monday}/>
              <SubjectsList subjects={subjects.tuesday}/>
              <SubjectsList subjects={subjects.wednesday}/>
              <SubjectsList subjects={subjects.thursday}/>
              <SubjectsList subjects={subjects.friday}/>
            </SwipeableViews>
          </div>
      )
};

const styles = theme => ({
  container: {
    display: 'flex',
    minHeight: 'calc(100vh - 48px)',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: theme.spacing(1)
  },
  loading: {
    alignItems: 'center',
  }
});

export default withStyles(styles)(Schedule)