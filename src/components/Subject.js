import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

const Subject = ({ ...props }) => {
  const { classes, subject, isCurrent } = props;

  return (
      <Paper className={isCurrent ? `${classes.subject} ${classes.subjectActive}` : `${classes.subject}`}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="subtitle2">{subject.start}</Typography>
            <Typography variant="subtitle2">{subject.end}</Typography>
          </Grid>
          <Grid item className={classes.info}>
            <Typography variant="h6" className={classes.name}>{subject.title}</Typography>
            <Typography variant="subtitle2">{subject.cabinet}</Typography>
            <Typography variant="subtitle2">{subject.teachers}</Typography>
          </Grid>
        </Grid>
      </Paper>
  )
};

const styles = theme => ({
  subject: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: theme.spacing(2),
    overflowX: 'hidden',
    marginBottom: theme.spacing(1),
  },
  subjectActive: {
    '&::before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      height: '100%',
      width: '4px',
      top: '0',
      left: '0',
      backgroundColor: theme.palette.primary.main,
    }
  },
  info: {
    maxWidth: '70vw',
  },
  name: {
    wordWrap: 'break-word',
  }
});

export default withStyles(styles)(Subject)