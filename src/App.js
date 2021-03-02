import React, { Component } from 'react';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import CastPage from './castpage.js';
import HomePage from './home.js';
import PageHeader from './pageheader.js';
import CastDetailsPage from './castdetails.js'
import CreateCharacter from './createCharacter.js'

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
                            path="/cast" 
                            exact
                            render={(routerProps) => <CastPage {...routerProps} />} 
                        />
                        <Route 
                            path="/cast/:id" 
                            exact
                            render={(routerProps) => <CastDetailsPage {...routerProps} />} 
                        />
                        <Route 
                            path="/create" 
                            exact
                            render={(routerProps) => <CreateCharacter {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}