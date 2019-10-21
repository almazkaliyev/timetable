import React from 'react'
import {Grid, makeStyles, Paper, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme =>({
  subjectPaper: {
    position: 'relative',
    marginBottom: '16px',
    padding: theme.spacing(2),
    overflow: 'hidden',
  },
  subjectActive: {
    '&::before': {
      position: 'absolute',
      content: '""',
      display: 'block',
      height: '100%',
      width: '4px',
      top: '0',
      left: '0',
      background: 'linear-gradient(180deg, rgb(170,0,255) 0%, rgb(226,84,255) 50%, rgb(170,0,255) 100%)',
    }
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  info: {
    maxWidth: '70vw',
  },
  title: {
    wordWrap: 'break-word',
  }
}));

function Subject({subject}) {
  const classes = useStyles();

  return (
      <Paper className={
        subject.isActive ? `${classes.subjectPaper} ${classes.subjectActive}` : `${classes.subjectPaper}`
      } elevation={5}>
        <Grid className={classes.container} container spacing={2}>
          <Grid item>
            <Typography variant="subtitle2">{subject.startTime}</Typography>
            <Typography variant="subtitle2">{subject.endTime}</Typography>
          </Grid>
          <Grid item className={classes.info}>
            <Typography variant="h6" gutterBottom className={classes.title}>{subject.title}</Typography>
            <Typography variant="body2">{subject.cabinet}</Typography>
            <Typography variant="body2">{subject.teachers}</Typography>
          </Grid>
        </Grid>
      </Paper>
  )
}

export default Subject