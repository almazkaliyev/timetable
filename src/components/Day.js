import React, {useEffect} from 'react'
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

function Day({data: subjects, isToday}) {
  const classes = useStyles();

  function checkTime(start, end) {
    let s = 60;
    let d = ':';
    let b = start.split(d);
    b = b[0] * s * s + b[1] * s;
    let e = end.split(d);
    e = e[0] * s * s + e[1] * s;
    let t = new Date();
    t = t.getHours() * s * s + t.getMinutes() * s;

    return (t >= b && t <= e);
  }

  return subjects.length === 0 ? (
      <Container className={classes.emptyContainer}>
        <Typography variant='h6'>
          Пар нет
        </Typography>
      </Container>
  ) : (
      <Container className={classes.container}>
        {subjects.map(subject => {
          let res = checkTime(subject.start, subject.end) && isToday;
          return (
            <Subject key={subject.id} subject={subject} isCurrent={res}/>
          )
        })}
      </Container>
  );
}

export default Day