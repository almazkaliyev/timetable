import React from 'react'
import {Container, makeStyles} from '@material-ui/core'
import Subject from '../Subject'

const useStyles = makeStyles({
  container: {
    marginTop: '16px',
    marginBottom: '16px'
  }
});

function Friday() {
  const subjects = [
    {
      id: '0',
      startTime: '08:30',
      endTime: '10:00',
      title: 'Родной язык в начальной школе',
      cabinet: '302',
      teachers: 'Хильченко О.А.'
    },
    {
      id: '1',
      startTime: '10:05',
      endTime: '10:35',
      title: 'Кураторский час',
      cabinet: '',
      teachers: ''
    },
    {
      id: '2',
      startTime: '10:40',
      endTime: '12:20',
      title: 'Практическая грамматика',
      cabinet: '208 / 403',
      teachers: 'Анциферова Л.В. / Бурумбаева А.М.'
    },
    {
      id: '3',
      startTime: '12:30',
      endTime: '14:00',
      title: 'Делопроизводство',
      cabinet: '29',
      teachers: 'Кусаинова А.Б.'
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

export default Friday