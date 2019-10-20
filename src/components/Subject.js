import React from 'react'
import {Grid, Paper, makeStyles, Typography} from '@material-ui/core'

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

function Subject({data}) {
  const classes = useStyles();

  return data.isActive ? (
      <Paper className={`${classes.subjectPaper} ${classes.subjectActive}`} elevation={5}>
        <Grid className={classes.container} container spacing={2}>
          <Grid item>
            <Typography variant="subtitle2">{data.startTime}</Typography>
            <Typography variant="subtitle2">{data.endTime}</Typography>
          </Grid>
          <Grid item className={classes.info}>
            <Typography variant="h6" gutterBottom className={classes.title}>{data.title}</Typography>
            <Typography variant="body2">{data.cabinet}</Typography>
            <Typography variant="body2">{data.teachers}</Typography>
          </Grid>
        </Grid>
      </Paper>
  ) : (
      <Paper className={`${classes.subjectPaper}`} elevation={5}>
        <Grid className={classes.container} container spacing={2}>
          <Grid item>
            <Typography variant="subtitle2">{data.startTime}</Typography>
            <Typography variant="subtitle2">{data.endTime}</Typography>
          </Grid>
          <Grid item className={classes.info}>
            <Typography variant="h6" gutterBottom className={classes.title}>{data.title}</Typography>
            <Typography variant="body2">{data.cabinet}</Typography>
            <Typography variant="body2">{data.teachers}</Typography>
          </Grid>
        </Grid>
      </Paper>
  )
}

export default Subject