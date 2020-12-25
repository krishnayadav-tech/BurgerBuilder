import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'
import buildControl from './BuildControl/BuildControl';
const BuildControls = (props)=>{
    
    let control = [{label : "Salad", type: "salad"}
    ,{label : "Bacon", type: "bacon"}
    ,{label : "Cheese", type: "cheese"}
    ,{label : "Meat", type: "meat"}];
    let x = control.map(x=>{
        return <BuildControl {...props} key={x.label} label={x.label} type={x.type}></BuildControl>
    })
    return(
    
    <div className={classes.BuildControls}>
        <p><strong>Your Price : {props.tatalPrice}</strong></p>
        {x}

        <button onClick={props.order} disabled={props.tatalPrice==60 } className={classes.OrderButton}>ORDER NOW</button>
    </div>)
}
export default BuildControls;