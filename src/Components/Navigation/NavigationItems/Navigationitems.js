import React from 'react';
import classes from './Navigationitems.module.css';
import NavigationItem from './Navigationitem/Navigationitem.js'

const NavigationItems = (props)=>{
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/">BurgerBuilder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    )
}
export default NavigationItems;
