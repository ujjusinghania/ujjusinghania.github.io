import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import HomePage from './HomePage.js';
import ProjectPage from './ProjectPage.js'
import ResumePage from './ResumePage.js';

class Routes extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/projects' component={ProjectPage} />
                    <Route exact path='/resume' component={ResumePage} />
                    <Route component={HomePage} />
                </Switch>
            </HashRouter>
        );
    }
}

export default Routes; 