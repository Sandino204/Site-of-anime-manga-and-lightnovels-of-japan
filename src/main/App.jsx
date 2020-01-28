import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Main from '../components/templates/Main'
import Logo from '../components/templates/Logo'
import Nav from '../components/templates/Nav'
import Footer from '../components/templates/Footer'

export default props => {
    return (
        <div className="container-fluid app">
            <Logo className="row"></Logo>
            <Nav className="row"></Nav>
            <Main className="row"></Main>
            <Footer className="row"></Footer>
        </div>
    )
}