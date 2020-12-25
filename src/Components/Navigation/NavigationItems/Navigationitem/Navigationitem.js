import React from 'react';
import classes from './Navigationitem.module.css';
const Navigationitem = (props)=>{
    return (
        <li className={classes.NavigationItem}><a href={props.link}>{props.children}</a></li>
    )
}
export default Navigationitem;
