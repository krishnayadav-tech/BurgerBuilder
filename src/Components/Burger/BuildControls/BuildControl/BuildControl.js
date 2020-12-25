import React from 'react';
import classes from './BuildControl.module.css';
const BuildControl = (props)=>{
    //props.ingredients.props.type != 0
    
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>
                {props.label}
            </div>
            <button disabled={props.ingredients[props.type] == 0} onClick={()=>props.removecall(props.type)} className={classes.Less}>Less</button>
            <button onClick={()=>props.addcall(props.type)} className={classes.More}>More</button>
        </div>
    )
}
export default BuildControl;