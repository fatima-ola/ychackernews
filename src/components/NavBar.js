import React from 'react'
import 'materialize-css';
import {Navbar, Icon, NavItem, Tab, Tabs} from 'react-materialize';

const NavBar = () => {
    return (
        <div>
            <Navbar
                alignLinks="right"
                brand={<a className="brand-logo" href="#news">Y Hacker News</a>}
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
                <NavItem href="">
                    Login
                </NavItem>
                <NavItem href="components.html">
                    Register
                </NavItem>
                <NavItem href="components.html">
                    search
                </NavItem>
            </Navbar>
            <Tabs className="tab-demo z-depth-1 tabs-fixed-width navbar-fixed">
                <Tab
                    active
                    options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                    }}
                    title="New"
                >
                    New
                </Tab>
                <Tab
                    options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                    }}
                    title="Past"
                >
                    Past
                </Tab>
                <Tab
                    options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                    }}
                    title="Comments"
                >
                    Comments
                </Tab>
                <Tab
                    options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                    }}
                    title="Ask"
                >
                    Ask
                </Tab>
                <Tab
                    options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                    }}
                    title="Show"
                >
                    Show
                </Tab>
                <Tab
                    options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                    }}
                    title="Jobs"
                >
                    Job
                </Tab>
                <Tab
                    options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                    }}
                    title="Submit"
                >
                    Submit
                </Tab>
            </Tabs>
        </div>
    )
}

export default NavBar