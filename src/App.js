import React, { useState } from 'react';
import Layout from './components/layout/index';
import Login from './views/login/index';
import Home from './views/home/index';
import Dashboard from './views/dashboard/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path='/home' component={Home} />
          <Route path='/second' component={Dashboard} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
