import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import HomePage from './HomePage.js';
import ProjectPage from './ProjectPage.js'

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/projects' component={ProjectPage} />
                    <Route component={HomePage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes; 