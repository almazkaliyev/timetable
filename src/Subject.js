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
          <Grid item>
            <Typography gutterBottom variant="subtitle1">{data.title}</Typography>
            <Typography gutterBottom variant="caption">{data.cabinet}</Typography>
            <Typography variant="caption">{data.teachers}</Typography>
          </Grid>
        </Grid>
      </Paper>
  )
}

export default Subject