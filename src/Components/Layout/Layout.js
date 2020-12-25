import React from 'react';
import classes from './Layout.module.css'; //dont' forget to put module
import SideDrawer from './../Navigation/SideDrawer/SideDrawer'
import ToolBar from './../Navigation/ToolBar/ToolBar';

const layout = (props)=>{
   
    return (
    <>
        <ToolBar></ToolBar>
        <main className={classes.Content}>
            {props.children}
        </main>
    </>)
}

export default layout;