import React from 'react'
import 'materialize-css';
import {Navbar, Icon, NavItem} from 'react-materialize';


const NavBar = () => {
    return (
        <div className="navbar-fixed">
            <Navbar
                alignLinks="right"
                brand={<a className="brand-logo" href="news" >Y Hacker News</a>}
                centerChildren
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
                }}
                >
                <NavItem href="#login">
                    Login
                </NavItem>
                <NavItem href="#register">
                    Register
                </NavItem>
                <NavItem href="#search">
                    search
                </NavItem>
            </Navbar>
        </div>
    )
}

export default NavBar