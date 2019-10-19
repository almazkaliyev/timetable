import React from 'react'
import {Container, makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    marginTop: '16px',
    marginBottom: '16px'
  }
});

function Thursday() {
  const classes = useStyles();

  return(
      <Container className={classes.container}>
        <Typography>День практики</Typography>
      </Container>
  )
}

export default Thursday