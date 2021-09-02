import React from 'react';
import {Switch,BrowserRouter} from 'react-router-dom';
import PublicRoute from './routes/PublicRoute';
import Dashboard from './views/Dashboard';
import Create from './views/Create';

const App = ()=>{
  return(
      <BrowserRouter>  
        <Switch>
          <PublicRoute exact path="/" component={Dashboard} />
          <PublicRoute exact path="/create" component={Create} />
          <PublicRoute path="/edit/:id" component={Create} />
        </Switch>
      </BrowserRouter>
  )
}

export default App;
