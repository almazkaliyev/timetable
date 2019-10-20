import React, {useState} from 'react'
import {AppBar, Tab, Tabs, useTheme} from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import Day from '../components/Day'

const subjects = [
  [
    {
      id: '0',
      startTime: '08:30',
      endTime: '10:00',
      title: 'Домашнее чтение',
      cabinet: '208',
      teachers: 'Анциферова Л.В. / Немилостева Е.Д.',
      isActive: false
    },
    {
      id: '1',
      startTime: '10:10',
      endTime: '11:40',
      title: 'Педагогика',
      cabinet: '211',
      teachers: 'Яровая Н.Л.',
      isActive: false
    },
    {
      id: '2',
      startTime: '11:50',
      endTime: '13:20',
      title: 'Этнопедагогика / Практика',
      cabinet: '310',
      teachers: 'Венгловская Н.С',
      isActive: false
    }
  ],
  [
    {
      id: '0',
      startTime: '10:10',
      endTime: '11:40',
      title: 'Практикум',
      cabinet: '208 / 403',
      teachers: 'Анциферова Л.В. / Бурумбаева А.М.',
      isActive: false
    },
    {
      id: '1',
      startTime: '11:50',
      endTime: '13:20',
      title: 'МНПИ',
      cabinet: '405',
      teachers: 'Бичун Л.В.',
      isActive: false
    },
    {
      id: '2',
      startTime: '14:00',
      endTime: '15:30',
      title: 'Теоретическая грамматика',
      cabinet: '208',
      teachers: 'Анциферова Л.В.',
      isActive: false
    },
    {
      id: '3',
      startTime: '15:40',
      endTime: '17:10',
      title: 'Физическая культура / Практика',
      cabinet: '',
      teachers: 'Глинов В.П. / Аверкина А.В.',
      isActive: false
    }
  ],
  [
    {
      id: '0',
      startTime: '08:30',
      endTime: '10:00',
      title: 'Психология / МНПИ',
      cabinet: '303 / 303',
      teachers: 'Виссарионова Е.Н. / Бичун Л.В.',
      isActive: false
    },
    {
      id: '1',
      startTime: '10:10',
      endTime: '11:40',
      title: 'Методика иностранного языка',
      cabinet: '302 / 303',
      teachers: 'Немилостева Е.Д.',
      isActive: false
    },
    {
      id: '2',
      startTime: '11:50',
      endTime: '13:20',
      title: 'Этнопедагогика',
      cabinet: '26',
      teachers: 'Венгловская Н.С',
      isActive: false
    }
    ,
    {
      id: '3',
      startTime: '14:00',
      endTime: '15:30',
      title: 'Практикум',
      cabinet: '',
      teachers: 'Анциферова Л.В. / Бурумбаева А.М.',
      isActive: false
    }
  ],
  null,
  [
    {
      id: '0',
      startTime: '08:30',
      endTime: '10:00',
      title: 'Родной язык в начальной школе',
      cabinet: '302',
      teachers: 'Хильченко О.А.',
      isActive: false
    },
    {
      id: '1',
      startTime: '10:05',
      endTime: '10:35',
      title: 'Кураторский час',
      cabinet: '',
      teachers: '',
      isActive: false
    },
    {
      id: '2',
      startTime: '10:40',
      endTime: '12:20',
      title: 'Практическая грамматика',
      cabinet: '208 / 403',
      teachers: 'Анциферова Л.В. / Бурумбаева А.М.',
      isActive: false
    },
    {
      id: '3',
      startTime: '12:30',
      endTime: '14:00',
      title: 'Делопроизводство',
      cabinet: '29',
      teachers: 'Кусаинова А.Б.',
      isActive: false
    }
  ]
];

function TimetablePage() {
  const theme = useTheme();
  const date = new Date();
  let day = date.getDay();
  // set Monday by default if isn't a weekend
  const activeDay = (day === 0 || day === 6) ? 0 : --day;
  const [value, setValue] = useState(activeDay);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
      <div>
        <AppBar
            position='static'
            color='default'>
          <Tabs
              indicatorColor='primary'
              variant='fullWidth'
              value={value}
              onChange={handleChange}>
            <Tab label='ПН'/>
            <Tab label='ВТ'/>
            <Tab label='СР'/>
            <Tab label='ЧТ'/>
            <Tab label='ПТ'/>
          </Tabs>
        </AppBar>
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
            style={{
              height: '85vh'
            }}>
          <Day subjects={subjects[0]}/>
          <Day subjects={subjects[1]}/>
          <Day subjects={subjects[2]}/>
          <Day subjects={subjects[3]}/>
          <Day subjects={subjects[4]}/>
        </SwipeableViews>
      </div>
  );
}

export default TimetablePage
