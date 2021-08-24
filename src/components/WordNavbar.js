import React from 'react'
import logo from '../images/logo.svg';
import './Word.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'
import HistoryContainer from './HistoryContainer';
import SearchWord from './SearchWord';
import HomeContainer from './HomeContainer';
export default function WordNavbar() {
    return (
        <div data-testid="wordNavBar-test">
            <BrowserRouter>
                <Navbar className="Navbar">
                    <Container >
                        <Navbar.Brand >
                            <img src={logo}></img>
                            <span className="NavbarClass">Vocabulary</span>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <div className="MenuLink"><Link to={'/'}>Home</Link></div>
                            <div className="MenuLink"><Link to={'/search'}>Search</Link></div>
                            <div className="MenuLink"><Link to={'/history'}>History</Link></div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <Route path="/search" component={SearchWord} />
                    <Route path="/history" component={HistoryContainer} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
