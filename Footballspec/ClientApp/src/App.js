import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import LoginPage from './components/auth/login/LoginPage';
import LogOut from './components/auth/login/LogOut';
import RegisterPage from './components/auth/register/RegisterPage'
export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    <Route exact path='/login' component={LoginPage} />
    <Route exact path='/register' component={RegisterPage} />
        {/* <Route exact path='/profile' component={UserProfile} /> */}
    <Route exact path='/logout' component={LogOut} />
  </Layout>
);
