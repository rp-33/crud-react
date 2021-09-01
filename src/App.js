import React,{Fragment} from 'react';
import { Router,Switch} from 'react-router-dom';
import history from './routes/history';
import PublicRoute from './routes/PublicRoute';
import Dashboard from './views/Dashboard';
import Create from './views/Create';

const App = ()=>{
  return(
    <Fragment>
      <Router history={history}>  
        <Switch>
          <PublicRoute
            exact
            path="/"
            component={Dashboard}
          />
          <PublicRoute
            exact
            path="/create"
            component={Create}
          />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App;
