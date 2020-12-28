import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import NotFount from '../containers/NotFount'
import Player from '../containers/Player'
import Layout from '../components/Layout'

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/register' component={Register}></Route>
                <Route exact path='/player/:id' component={Player}></Route>
                <Route component={NotFount}></Route>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;