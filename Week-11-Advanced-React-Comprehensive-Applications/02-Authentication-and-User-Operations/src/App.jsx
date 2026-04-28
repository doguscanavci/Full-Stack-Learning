import React from 'react';
import './index.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import AuthContextProvider from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
        <Switch>
          <PrivateRoute exact path="/">
            <FriendsList />
          </PrivateRoute>
          <PrivateRoute path="/friends">
            <FriendsList />
          </PrivateRoute>
          <PrivateRoute exact path="/friends/add">
            <AddFriend />
          </PrivateRoute>
          <Route path="/login">
            <LoginForm />
          </Route>
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
