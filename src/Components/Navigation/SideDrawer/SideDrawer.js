import React from 'react'
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/Navigationitems';
import classes from './SideDrawer.module.css';


const SideDrawer=()=>{
    return (
        <div className={classes.SideDrawer}>
            <Logo height="5%"></Logo>
            <nav></nav>
        </div>
    )
}
export default SideDrawer;
