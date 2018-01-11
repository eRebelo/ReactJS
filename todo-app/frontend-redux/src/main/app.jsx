import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import styles from '../assets/custom.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from '../template/routes'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)