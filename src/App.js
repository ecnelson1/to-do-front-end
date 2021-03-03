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
import { getUserFromLocalStorage, putUserInLocalStorage } from './localStorageUtils.js';

export default class App extends Component {
    state = {
    token: getUserFromLocalStorage()
    }
    handleTokenChange = (token) => { this.setState({ token }) 
    putUserInLocalStorage(token);
} 
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
                            render={(routerProps) => <SignUpPage handleTokenChange={this.handleTokenChange} {...routerProps} />} 
                        />
                        <Route 
                            path="/login" 
                            exact
                            render={(routerProps) => <LoginPage handleTokenChange={this.handleTokenChange} {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}