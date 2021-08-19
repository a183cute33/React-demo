import React, { useState } from 'react';
import Login from './views/login/index';
import Home from './views/home/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <BrowserRouter>
      <Switch>
        <Home />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
