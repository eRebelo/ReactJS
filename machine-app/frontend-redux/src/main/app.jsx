import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../assets/custom.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'
import MessagesToastr from '../widgets/messagesToastr'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
        {/* Custom messages of success/failure after REST operations */}
        <MessagesToastr />
    </div>
)