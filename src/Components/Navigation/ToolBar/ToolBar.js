import React from 'react';
import classes from './ToolBar.module.css'
import Logo from './../../Logo/Logo';
import NavigationItems from '../NavigationItems/Navigationitems';

const ToolBar = (props)=>{
    return (
        <header className={classes.ToolBar}>
            <div>MENU</div>
            <Logo height="80%"></Logo>
            
            <nav className={classes.nav}>
                <NavigationItems></NavigationItems>
            </nav>
        </header>
    )
}

export default ToolBar;

