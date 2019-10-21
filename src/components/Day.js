import React from 'react'
import Subject from './Subject'
import {Container, makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    marginTop: '24px',
    marginBottom: '16px',
  },
  emptyContainer: {
    marginTop: '32px',
    textAlign: 'center',
  }
});

function Day({subjects}) {
  const classes = useStyles();

  return subjects === null ? (
      <Container className={classes.emptyContainer}>
        <Typography variant='h6'>
          Пар нет
        </Typography>
      </Container>
  ) : (
      <Container className={classes.container}>
        {subjects.map(subject => (
            <Subject key={subject.id} subject={subject} />
        ))}
      </Container>
  );
}

export default Day