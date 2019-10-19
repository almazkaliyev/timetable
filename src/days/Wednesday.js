import React from 'react'
import {Container, makeStyles} from '@material-ui/core'
import Subject from '../Subject'

const useStyles = makeStyles({
  container: {
    marginTop: '16px',
    marginBottom: '16px'
  }
});

function Wednesday() {
  const subjects = [
    {
      id: '0',
      startTime: '08:30',
      endTime: '10:00',
      title: 'Психология / МНПИ',
      cabinet: '',
      teachers: 'Виссарионова Е.Н. / Бичун Л.В.'
    },
    {
      id: '1',
      startTime: '10:10',
      endTime: '11:40',
      title: 'Методика иностранного языка',
      cabinet: '',
      teachers: 'Немилостева Е.Д.'
    },
    {
      id: '2',
      startTime: '11:50',
      endTime: '13:20',
      title: 'Этнопедагогика',
      cabinet: '',
      teachers: 'Венгловская Н.С'
    }
    ,
    {
      id: '3',
      startTime: '14:00',
      endTime: '15:30',
      title: 'Практикум',
      cabinet: '',
      teachers: 'Анциферова Л.В. / Бурумбаева А.М.'
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

export default Wednesday