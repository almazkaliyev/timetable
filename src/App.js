import React, {useState} from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import {AppBar, Tab, Tabs} from '@material-ui/core'
import Monday from './days/Monday'
import Tuesday from './days/Tuesday'
import Wednesday from './days/Wednesday'
import Thursday from './days/Thursday'
import Friday from './days/Friday'

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BrowserRouter>
      <AppBar
          position='static'
          color='default'>
        <Tabs
            indicatorColor='primary'
            textColor='primary'
            variant='fullWidth'
            value={value}
            onChange={handleChange}>
          <Tab label='MON' component={Link} to='/monday' />
          <Tab label='TUE' component={Link} to='/tuesday' />
          <Tab label='WED' component={Link} to='/wednesday' />
          <Tab label='THU' component={Link} to='/thursday' />
          <Tab label='FRI' component={Link} to='/friday' />
        </Tabs>
      </AppBar>
      <Switch>
        <Route path='/monday' component={Monday} />
        <Route path='/tuesday' component={Tuesday} />
        <Route path='/wednesday' component={Wednesday} />
        <Route path='/thursday' component={Thursday} />
        <Route path='/friday' component={Friday} />
      </Switch>
    </BrowserRouter>
  );
}

export default App
