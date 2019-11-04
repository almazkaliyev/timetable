import React from 'react';
import Subject from './Subject';
import { withStyles } from '@material-ui/core';

const SubjectList = ({ subjects, ...props }) => {
  const { classes } = props;

  return subjects.length === 0
      ? (
          <span className={classes.empty}>Пар нет</span>
      ) : (
          <div>
            {subjects.map(
                subject => (<Subject key={subject.id} subject={subject}/>)
            )}
          </div>
      )
};

const styles = theme => ({
  empty: {
    display: 'block',
    marginTop: theme.spacing(3),
    textAlign: 'center',
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.68)',
  }
});

export default withStyles(styles)(SubjectList)