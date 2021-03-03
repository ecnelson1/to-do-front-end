import React, { Component } from 'react';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import PageHeader from './components/pageheader.js';
import HomePage from './Home/home.js';
import SignUpPage from './AuthPages/signup.js'
import LoginPage from './AuthPages/login.js'
import TodosPage from './TodosListPage/todos-list.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <PageHeader />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/todos" 
                            exact
                            render={(routerProps) => <TodosPage {...routerProps} />} 
                        />
                        <Route 
                            path="/signup" 
                            exact
                            render={(routerProps) => <SignUpPage {...routerProps} />} 
                        />
                        <Route 
                            path="/login" 
                            exact
                            render={(routerProps) => <LoginPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}