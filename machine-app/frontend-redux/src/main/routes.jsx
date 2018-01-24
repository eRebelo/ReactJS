import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Machine from '../components/machine/equipment'
import About from '../components/about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/machine' component={Machine} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/machine' />
    </Router>
)