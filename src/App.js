import React, {useState} from 'react'
import {AppBar, Box, Tab, Tabs, useTheme} from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import Day from './components/Day'
import Copyright from './components/Copyright'

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

function TabPanel(props) {
  const { children } = props;
  return(
      <Box>
        {children}
      </Box>
  );
}

function App() {
  const theme = useTheme();
  const date = new Date();
  let day = date.getDay();
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
            textColor='primary'
            variant='fullWidth'
            value={value}
            onChange={handleChange}>
          <Tab label='ПН'  />
          <Tab label='ВТ'  />
          <Tab label='СР'  />
          <Tab label='ЧТ'  />
          <Tab label='ПТ'  />
        </Tabs>
      </AppBar>
      <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          style={{
            height: '80vh'
      }}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Day subjects={subjects[0]}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Day subjects={subjects[1]}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Day subjects={subjects[2]}/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Day subjects={subjects[3]}/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Day subjects={subjects[4]}/>
        </TabPanel>
      </SwipeableViews>
      <Box style={{
        width: '100%',
        position: 'fixed',
        bottom: '5vh',
        textAlign: 'center'
      }}>
        <Copyright/>
      </Box>
    </div>
  );
}

export default App
