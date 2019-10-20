import React from 'react'
import Subject from '../Subject'
import {Container, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    marginTop: '16px',
    marginBottom: '16px'
  }
});

function Monday() {
  const subjects = [
    {
      id: '0',
      startTime: '08:30',
      endTime: '10:00',
      title: 'Домашнее чтение',
      cabinet: '208',
      teachers: 'Анциферова Л.В. / Немилостева Е.Д.'
    },
    {
      id: '1',
      startTime: '10:10',
      endTime: '11:40',
      title: 'Педагогика',
      cabinet: '211',
      teachers: 'Яровая Н.Л.'
    },
    {
      id: '2',
      startTime: '11:50',
      endTime: '13:20',
      title: 'Этнопедагогика / Практика',
      cabinet: '310',
      teachers: 'Венгловская Н.С'
    }
  ];

  const classes = useStyles();

  return(
      <Container className={classes.container}>
        {subjects.map(subject => (
            <Subject data={subject} />
        ))}
      </Container>
  )
}

export default Monday