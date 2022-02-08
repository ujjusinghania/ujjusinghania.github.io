import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import HomePage from './HomePage.js';
import ProjectPage from './ProjectPage.js'
import ResumePage from './ResumePage.js';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/projects' component={ProjectPage} />
                    <Route exact path='/resume' component={ResumePage} />
                    <Route component={HomePage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes; 