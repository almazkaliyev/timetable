import React, {useState} from 'react'
import {AppBar, Box, Tab, Tabs, useTheme} from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import Monday from './components/days/Monday'
import Tuesday from './components/days/Tuesday'
import Wednesday from './components/days/Wednesday'
import Thursday from './components/days/Thursday'
import Friday from './components/days/Friday'
import Copyright from './components/Copyright'

function TabPanel(props) {
  const { children } = props;
  return(
      <Box>
        {children}
      </Box>
  );
}

function App() {
  const date = new Date();
  let day = date.getDay();
  const theme = useTheme();
  const [value, setValue] = useState((day === 0 || day === 6) ? 0 : --day);

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
          <Monday/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Tuesday/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Wednesday/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Thursday/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Friday/>
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
