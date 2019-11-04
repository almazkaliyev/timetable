import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import SubjectsList from './SubjectsList';
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from '@material-ui/core';

const Schedule = ({ ...props }) => {
  const { classes, loading, subjects, index, onChangeIndex } = props;

  return loading
      ? (
          <div className={`${classes.container} ${classes.loading}`}>
            <CircularProgress/>
          </div>
      ) : (
          <div className={classes.container}>
            <SwipeableViews className={classes.swipeContainer} index={index} onChangeIndex={onChangeIndex}>
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: theme.spacing(1),
  },
  loading: {
    alignItems: 'center',
  },
  swipeContainer: {
    minHeight: `calc(100vh - 48px - ${theme.spacing(1)}px)`,
  }
});

export default withStyles(styles)(Schedule)