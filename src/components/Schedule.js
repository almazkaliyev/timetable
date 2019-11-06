import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';
import SubjectsList from './SubjectsList';

const Schedule = ({
  loading,
  subjects: { monday, tuesday, wednesday, thursday, friday },
  index,
  onChangeIndex,
  ...props
}) => {
  const { classes } = props;

  return loading ? (
    <div className={`${classes.container} ${classes.loading}`}>
      <CircularProgress />
    </div>
  ) : (
    <div className={classes.container}>
      <SwipeableViews
        className={classes.swipeContainer}
        index={index}
        onChangeIndex={onChangeIndex}
      >
        <SubjectsList subjects={monday} />
        <SubjectsList subjects={tuesday} />
        <SubjectsList subjects={wednesday} />
        <SubjectsList subjects={thursday} />
        <SubjectsList subjects={friday} />
      </SwipeableViews>
    </div>
  );
};

const styles = theme => ({
  container: {
    display: 'flex',
    marginTop: theme.spacing(0.5),
    width: '100%',
    minHeight: `calc(100vh - 48px - ${theme.spacing(0.5)}px)`,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  loading: {
    alignItems: 'center',
  },
  swipeContainer: {
    minHeight: `calc(100vh - 48px - ${theme.spacing(0.5)}px)`,
  },
});

export default withStyles(styles)(Schedule);
