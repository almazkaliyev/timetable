import React from 'react'
import {Grid, Paper, makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme =>({
  subjectPaper: {
    marginBottom: '8px',
    padding: theme.spacing(2),
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

  return(
      <Paper className={classes.subjectPaper}>
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